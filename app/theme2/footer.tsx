import { Book, PhoneIcon } from 'lucide-react';
import Link from 'next/link';

const contacts = {
  whatsapp: 'https://wa.me/1234567890', // Update with actual link
};

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-600 text-white pt-16 pb-8 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-center items-center">
          <div className="flex flex-col justify-center items-center gap-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-white">
              {process.env.NEXT_PUBLIC_SITE_NAME}
            </h3>
            <p className="text-white">
              Your all-in-one platform for digital tools to grow your business.
            </p>
            <div className="flex flex-col gap-4 items-center md:flex-row">
              {[
                { icon: <PhoneIcon size={18} />, name: 'Contact', url: contacts.whatsapp },
                { icon: <Book size={18} />, name: 'Subscribe to ' + process.env.NEXT_PUBLIC_SITE_NAME, url: '#pricing' },
              ].map((item, index) => (
                <Link
                  key={index}
                  href={item.url}
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 border-b-4 border-blue-600 hover:border-blue-500 rounded flex flex-row items-center cursor-pointer gap-2 text-sm transition"
                >
                  {item.icon} {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-white mt-12 pt-8 text-center text-gray-400 text-sm">
          <p className="text-white">
            © {currentYear} {process.env.NEXT_PUBLIC_SITE_NAME}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};