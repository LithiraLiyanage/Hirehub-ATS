import{statusClass}from'../utils/validators';export default function StatusBadge({status}){return <span className={`rounded-full px-3 py-1 text-xs font-bold ${statusClass(status)}`}>{status}</span>}
