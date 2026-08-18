# Image manifest

The build currently shows soft gradient placeholders (with an icon and the
expected filename) wherever a real photo belongs. Your Figma photos are
Unsplash+ licensed, so they can't be substituted automatically — export them
from Figma (select layer → right-click → Copy/Export → PNG or JPG) and drop
them into `public/images/` using the exact filenames below. Each component
already points at these paths, so the page picks the photo up immediately,
no code changes needed.

| File | Used on | Suggested content |
|---|---|---|
| `hero-care.jpg` | Home hero | Nurse attending to elderly patient |
| `dept-womens-care.jpg` | Home departments | Pregnant woman |
| `dept-child-care.jpg` | Home departments | Doctor holding baby |
| `dept-surgery.jpg` | Home departments | Doctor showing X-ray on screen |
| `service-maternity.jpg` | Home dedicated services | Pregnant woman |
| `service-surgery.jpg` | Home dedicated services | Surgeon operating |
| `service-pediatric.jpg` | Home dedicated services | Doctor with baby |
| `service-diagnostics.jpg` | Home dedicated services | Doctor with X-ray screen |
| `about-team.jpg` | Home about section | Group of 3 clinicians |
| `about-doctors.jpg` | About page | Group of 3 clinicians |
| `about-doctor-portrait.jpg` | About page | Doctor portrait, X-ray screen behind |
| `doctor-1.jpg` … `doctor-8.jpg` | Doctors page + home teaser | Individual doctor headshots |
| `map-embed.jpg` | Contact page | Map screenshot (or swap for a live embed) |

Once the files exist, `next/image`-quality result requires switching
`PlaceholderImage` calls to a real `<Image src="/images/...">`. Simplest
path: rename the placeholder component usages in each component file to
`next/image`, or ask me to wire it up once the photos are in place.
