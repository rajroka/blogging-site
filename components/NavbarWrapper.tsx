import Navbar from './Navbar';
import { checkRole } from '@/utils/roles';

export default async function NavbarWrapper() {
  const isAdmin = await checkRole('admin'); // server-safe
  return <Navbar isAdmin={isAdmin} />;
}