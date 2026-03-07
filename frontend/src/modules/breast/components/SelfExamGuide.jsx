export default function SelfExamGuide() {
  return (
    <>
      <div className="flex items-center justify-between">

        <h3 className="text-lg font-semibold">
          Self-exam Guide
        </h3>

        <div className="text-sm text-gray-100/60">
          Step-by-step
        </div>

      </div>

      <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">

        <div className="p-3 bg-gray-700 rounded-lg">
          <div className="text-xs text-gray-100/60">Step 1</div>
          <div className="mt-1 text-sm text-gray-200">
            Look at breasts in mirror for changes.
          </div>
        </div>

        <div className="p-3 bg-gray-700 rounded-lg">
          <div className="text-xs text-gray-100/60">Step 2</div>
          <div className="mt-1 text-sm text-gray-200">
            Raise arms and look for asymmetry.
          </div>
        </div>

        <div className="p-3 bg-gray-700 rounded-lg">
          <div className="text-xs text-gray-100/60">Step 3</div>
          <div className="mt-1 text-sm text-gray-200">
            Feel breasts lying down and standing.
          </div>
        </div>

      </div>
    </>
  );
}