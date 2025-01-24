export default function Loading() {
    return (
      <div className="flex items-center justify-center h-screen bg-gradient-to-br from-blue-900 via-gray-800 to-gray-900 ">
        <div className="mx-auto">
          <div className="loader mx-auto"></div>
          <p className="mt-4 text-lg font-medium text-white">
            Please wait, we’re getting things ready for you...
          </p>
        </div>
      </div>
    );
  }
  