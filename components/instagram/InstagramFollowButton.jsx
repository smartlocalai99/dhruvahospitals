import { FaInstagram } from 'react-icons/fa';
import { site } from '@/lib/site';

export default function InstagramFollowButton({ className = '' }) {
  return (
    <a
      href={site.socials.instagram}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn-primary flex-none gap-2 ${className}`}
    >
      <FaInstagram className="h-4 w-4" aria-hidden="true" />
      Follow @{site.instagramHandle}
    </a>
  );
}
