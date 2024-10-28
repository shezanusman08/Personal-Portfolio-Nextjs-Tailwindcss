import { Menu } from 'lucide-react';
import Link from 'next/link';
import { Sheet, SheetTrigger, SheetContent, SheetClose } from '@/components/ui/sheet';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4 border-b">
      <div className="text-lg font-bold">Muhammad Shezan</div>
      
      {/* Desktop Links */}
      <div className="hidden md:flex space-x-8">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>
      


      {/* Mobile Menu Button Responsive */}
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <button>
              <Menu size={24} />
            </button>
          </SheetTrigger>
          
          <SheetContent side="right" className="p-4">
            <div className="flex flex-col space-y-4">
              <SheetClose asChild>
                <Link href="/">Home</Link>
              </SheetClose>
              <SheetClose asChild>
                <Link href="/about">About</Link>
              </SheetClose>
              <SheetClose asChild>
                <Link href="/contact">Contact</Link>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
