export default function DashboardCard({title,value}){return <div className="card p-5"><p className="text-sm text-slate-500">{title}</p><p className="mt-2 text-3xl font-black">{value??0}</p></div>}
