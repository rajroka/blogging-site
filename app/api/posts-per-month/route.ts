import { NextResponse } from "next/server";
import connect from "@/lib/db";
import { BlogPost } from "@/lib/modals/Blog";

export async function GET() {
  try {
    await connect();

    const posts = await BlogPost.aggregate([
      {
        $group: {
          _id: { $dateToString: { format: "%Y-%m", date: "$createdAt" } },
          count: { $sum: 1 },
        },
      },
      { $sort: { _id: 1 } },
    ]);

    // convert "2025-02" -> "February 2025"
    const formatted = posts.map((item) => {
      const [year, month] = item._id.split("-");
      const date = new Date(Number(year), Number(month) - 1);
      const monthName = date.toLocaleString("default", { month: "long" });
      return { month: `${monthName} ${year}`, count: item.count };
    });

    return NextResponse.json(formatted);
  } catch (error) {
    console.error("Error fetching posts per month:", error);
    return NextResponse.json(
      { error: "Failed to fetch posts per month" },
      { status: 500 }
    );
  }
}
