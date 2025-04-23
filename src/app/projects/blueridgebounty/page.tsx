export default function BlueRidgeBountyPage() {
  return (
    <section className="max-w-5xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-4">Blue Ridge Bounty</h1>
      <p className="mb-4 text-gray-600">
        Blue Ridge Bounty is a custom-built farmers market platform designed to support local vendors, streamline market scheduling, and simplify admin workflows.
      </p>

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
    </section>
  );
}
