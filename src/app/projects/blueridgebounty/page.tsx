import Image from 'next/image';

export default function BlueRidgeBountyPage() {
  return (
    <section className="max-w-5xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-4">Blue Ridge Bounty</h1>
      <p className="mb-4 text-gray-600">
        Blue Ridge Bounty is a custom-built farmers market platform designed to support local vendors, streamline market scheduling, and simplify admin workflows.
      </p>

      <Image
        src="/projects/blueridgebounty/home-page.webp"
        alt="Blue Ridge Bounty homepage"
        width={1200}
        height={675}
        className="rounded-lg shadow-md mb-8"
      />

      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Tech Stack</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>PHP (OOP) + MySQL for backend</li>
          <li>Vanilla JavaScript + Cropper.js for frontend interactivity</li>
          <li>ImageMagick for server-side image optimization</li>
          <li>Fully responsive design</li>
        </ul>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Key Features</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>Vendor dashboard with product management</li>
          <li>Admin tools for market scheduling, vendor RSVPs, and homepage updates</li>
          <li>Soft-delete system to prevent ghost data</li>
          <li>Custom image cropping + preview system</li>
        </ul>
      </div>

      <div className="flex flex-wrap gap-4">
        <a
          href="https://blueridgebounty.us"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition"
        >
          Visit Live Site
        </a>
        <a
          href="https://github.com/CAPNCOOP/cooper-taylor-web289-final"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-black px-6 py-2 rounded hover:bg-gray-800 transition"
        >
          View GitHub Repo
        </a>
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-semibold mb-8">Feature Gallery</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-bold mb-2">Log In</h3>
            <p className="text-gray-600 text-sm mb-3">Secure login for users, vendors, admins, and super admins.</p>
            <Image src="/projects/blueridgebounty/log-in.webp" alt="Login" width={1000} height={600} className="rounded-lg shadow-md" />
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2">Vendor Dashboard</h3>
            <p className="text-gray-600 text-sm mb-3">Manage products, RSVPs, and view profile analytics.</p>
            <Image src="/projects/blueridgebounty/vendor-dashboard.webp" alt="Vendor dashboard" width={1000} height={600} className="rounded-lg shadow-md" />
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2">Vendor Profile</h3>
            <p className="text-gray-600 text-sm mb-3">Public-facing profiles with product galleries.</p>
            <Image src="/projects/blueridgebounty/vendor-profile.webp" alt="Vendor Profile" width={1000} height={600} className="rounded-lg shadow-md" />
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2">Vendor Products</h3>
            <p className="text-gray-600 text-sm mb-3">Full product listings with category filtering.</p>
            <Image src="/projects/blueridgebounty/vendor-products.webp" alt="Vendor Products" width={1000} height={600} className="rounded-lg shadow-md" />
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2">All Vendors</h3>
            <p className="text-gray-600 text-sm mb-3">Directory-style view of all approved vendors.</p>
            <Image src="/projects/blueridgebounty/our-vendors.webp" alt="Vendor Directory" width={1000} height={600} className="rounded-lg shadow-md" />
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2">Search Function</h3>
            <p className="text-gray-600 text-sm mb-3">Dynamic search bar for vendors and products.</p>
            <Image src="/projects/blueridgebounty/vendors-search.webp" alt="Vendor Search" width={1000} height={600} className="rounded-lg shadow-md" />
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2">Admin Dashboard</h3>
            <p className="text-gray-600 text-sm mb-3">Approve vendors, control homepage status, manage RSVPs.</p>
            <Image src="/projects/blueridgebounty/admin-dash.webp" alt="Admin Dashboard" width={1000} height={600} className="rounded-lg shadow-md" />
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2">Admin User Control</h3>
            <p className="text-gray-600 text-sm mb-3">Toggle user status and control platform access.</p>
            <Image src="/projects/blueridgebounty/toggle-function.webp" alt="Admin User Toggle" width={1000} height={600} className="rounded-lg shadow-md" />
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2">Image Cropper</h3>
            <p className="text-gray-600 text-sm mb-3">Upload and crop product images using Cropper.js.</p>
            <Image src="/projects/blueridgebounty/cropper-modal.webp" alt="Cropper modal" width={1000} height={600} className="rounded-lg shadow-md" />
          </div>
        </div>
      </div>
    </section>
  );
}
