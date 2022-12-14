
export default function Error404() {
    return (
      <>
        <main
          className="min-h-full bg-cover bg-center sm:bg-top"
          style={{
            backgroundImage:
              'url("https://images.pexels.com/photos/8474971/pexels-photo-8474971.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
          }}
        >
          <div className="max-w-7xl mx-auto px-4  sm:px-6 sm:py-24 lg:px-8 lg:py-48 top-1">
            <p className="text-sm font-semibold text-black text-opacity-50 uppercase tracking-wide">404 error</p>
            <h1 className="mt-2 text-4xl font-extrabold text-white tracking-tight sm:text-5xl">
              Uh oh! I think you’re lost.
            </h1>
            <p className="mt-2 text-lg font-medium text-black text-opacity-50">
              It looks like the page you’re looking for doesn't exist.
            </p>
            <div className="mt-6">
              <a
                href="#"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-black text-opacity-75 bg-white bg-opacity-75 sm:bg-opacity-25 sm:hover:bg-opacity-50"
              >
                Go back home
              </a>
            </div>
          </div>
        </main>
      </>
    )
  }