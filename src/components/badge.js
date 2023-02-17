
const badgeTypes = new Map([
  ["go", { "bg": "bg-indigo-100", "text": "text-indigo-800" }],
  ["open source", { "bg": "bg-indigo-100", "text": "text-indigo-800" }],
  ["k8s", { "bg": "bg-indigo-100", "text": "text-indigo-800" }],
  ["python", { "bg": "bg-indigo-100", "text": "text-indigo-800" }],
  ["c", { "bg": "bg-indigo-100", "text": "text-indigo-800" }],
  ["c++", { "bg": "bg-indigo-100", "text": "text-indigo-800" }],
  ["private", { "bg": "bg-indigo-100", "text": "text-indigo-800" }],
  ["hackathon", { "bg": "bg-indigo-100", "text": "text-indigo-800" }],
  ["defense", { "bg": "bg-indigo-100", "text": "text-indigo-800" }],
  ["react", { "bg": "bg-indigo-100", "text": "text-indigo-800" }],
  ["fastapi", { "bg": "bg-indigo-100", "text": "text-indigo-800" }],
  ["mongodb", { "bg": "bg-indigo-100", "text": "text-indigo-800" }],
  ["unity", { "bg": "bg-indigo-100", "text": "text-indigo-800" }],
])


export default function Badge({ badgeType }) {
  const badge = badgeTypes.get(badgeType)
  return (
    <>
      <span className={`inline-flex items-center rounded-full ${badge.bg} px-2.5 py-0.5 text-xs font-medium ${badge.text}"`}>
        {badgeType}
      </span>
    </>
  )
}