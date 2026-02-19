const people = [
  { name: "Ethan Lee", role: "IT Specialist" },
  { image: "/assets/people-2.png", name: "Emily Baker", role: "Marketing Manager" },
  {image: "/assets/people-3.png", name: "Micheal Shaun", role: "Sales Director" },
  {image: "/assets/people-4.png", name: "Liam Carter", role: "Product Designer" },
  { image: "/assets/people-5.png",name: "Grace Kim", role: "Customer Lead" },
  { image: "/assets/people-6.png",name: "Noah Williams", role: "Finance Head" },
  { image: "/assets/people-7.png",name: "Isabella Rossi", role: "Operations Manager" },
  { image: "/assets/people-8.png",name: "Ava Thompson", role: "HR Executive" },
  { image: "/assets/people-5.png",name: "Grace Kim", role: "Customer Lead" },
  { image: "/assets/people-6.png",name: "Noah Williams", role: "Finance Head" },
  { image: "/assets/people-7.png",name: "Isabella Rossi", role: "Operations Manager" },
  { image: "/assets/people-8.png",name: "Ava Thompson", role: "HR Executive" },

];

export default function People() {
  const avatarSrc = "/assets/Ethan.png";

  return (
    <section className="flex flex-col gap-5 bg-white p-3 sm:p-4 rounded-2xl">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div className="flex-1 relative w-full">
          <div className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 pointer-events-none">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.66667 11.3333C9.244 11.3333 11.3333 9.244 11.3333 6.66667C11.3333 4.08934 9.244 2 6.66667 2C4.08934 2 2 4.08934 2 6.66667C2 9.244 4.08934 11.3333 6.66667 11.3333Z" stroke="#3D3936" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M10 10L14 14" stroke="#3D3936" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <input
            className="w-full sm:w-[60%] rounded-full bg-white pl-10 sm:pl-11 pr-4 py-2 sm:py-2.5 text-sm outline-none border"
            placeholder="Search by Employee Name or Number"
          />
        </div>
        <div className="flex items-center gap-1 sm:gap-2 justify-end flex-wrap">
          <button className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0">
          <svg className="w-full h-full" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" y="0.5" width="47" height="47" rx="13.5" stroke="#E5E5E4"/>
<path d="M32 26C32 31.5 31 32 24 32C17 32 16 31.5 16 26" stroke="#3D3936" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M24 16L24 27" stroke="#3D3936" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20 23L24 27L28 23" stroke="#3D3936" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

          </button>
          <button className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0">
          <svg className="w-full h-full" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" y="0.5" width="47" height="47" rx="13.5" stroke="#E5E5E4"/>
<path d="M15 18.5867C15 17.0347 18 16 24 16C30 16 33 17.0347 33 18.5867C33 21 26 24 26 26.3466C26 28.416 26 28.416 26 29.968C26 31.52 22 33.072 22 31.0026C22 28.9333 22 28.9333 22 26.3466C22 24 15 21 15 18.5867Z" stroke="#3D3936" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

          </button>
          <button className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0">
          <svg className="w-full h-full" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="48" height="48" rx="14" fill="#3D3936"/>
<path d="M15 24H31.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M23.25 32.25L23.25 15.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

          </button><div className="flex items-center gap-1 sm:gap-2 border rounded-xl p-1 sm:p-2">
          <button className="w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0">
          <svg className="w-full h-full" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="40" height="40" rx="12" fill="#3D3936"/>
<path d="M30 16.52V11.98C30 10.57 29.36 10 27.77 10H23.73C22.14 10 21.5 10.57 21.5 11.98V16.51C21.5 17.93 22.14 18.49 23.73 18.49H27.77C29.36 18.5 30 17.93 30 16.52Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M30 27.77V23.73C30 22.14 29.36 21.5 27.77 21.5H23.73C22.14 21.5 21.5 22.14 21.5 23.73V27.77C21.5 29.36 22.14 30 23.73 30H27.77C29.36 30 30 29.36 30 27.77Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.5 16.52V11.98C18.5 10.57 17.86 10 16.27 10H12.23C10.64 10 10 10.57 10 11.98V16.51C10 17.93 10.64 18.49 12.23 18.49H16.27C17.86 18.5 18.5 17.93 18.5 16.52Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.5 27.77V23.73C18.5 22.14 17.86 21.5 16.27 21.5H12.23C10.64 21.5 10 22.14 10 23.73V27.77C10 29.36 10.64 30 12.23 30H16.27C17.86 30 18.5 29.36 18.5 27.77Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

          </button>
          <button className="w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0">
          <svg className="w-full h-full" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14 19.25H26C26.5967 19.25 27.169 19.0129 27.591 18.591C28.0129 18.169 28.25 17.5967 28.25 17V14C28.25 13.4033 28.0129 12.831 27.591 12.409C27.169 11.9871 26.5967 11.75 26 11.75H14C13.4033 11.75 12.831 11.9871 12.409 12.409C11.9871 12.831 11.75 13.4033 11.75 14V17C11.75 17.5967 11.9871 18.169 12.409 18.591C12.831 19.0129 13.4033 19.25 14 19.25ZM13.25 14C13.25 13.8011 13.329 13.6103 13.4697 13.4697C13.6103 13.329 13.8011 13.25 14 13.25H26C26.1989 13.25 26.3897 13.329 26.5303 13.4697C26.671 13.6103 26.75 13.8011 26.75 14V17C26.75 17.1989 26.671 17.3897 26.5303 17.5303C26.3897 17.671 26.1989 17.75 26 17.75H14C13.8011 17.75 13.6103 17.671 13.4697 17.5303C13.329 17.3897 13.25 17.1989 13.25 17V14ZM14 28.25H26C26.5967 28.25 27.169 28.0129 27.591 27.591C28.0129 27.169 28.25 26.5967 28.25 26V23C28.25 22.4033 28.0129 21.831 27.591 21.409C27.169 20.9871 26.5967 20.75 26 20.75H14C13.4033 20.75 12.831 20.9871 12.409 21.409C11.9871 21.831 11.75 22.4033 11.75 23V26C11.75 26.5967 11.9871 27.169 12.409 27.591C12.831 28.0129 13.4033 28.25 14 28.25ZM13.25 23C13.25 22.8011 13.329 22.6103 13.4697 22.4697C13.6103 22.329 13.8011 22.25 14 22.25H26C26.1989 22.25 26.3897 22.329 26.5303 22.4697C26.671 22.6103 26.75 22.8011 26.75 23V26C26.75 26.1989 26.671 26.3897 26.5303 26.5303C26.3897 26.671 26.1989 26.75 26 26.75H14C13.8011 26.75 13.6103 26.671 13.4697 26.5303C13.329 26.3897 13.25 26.1989 13.25 26V23Z" fill="#3D3936"/>
</svg>

          </button>
          <button className="w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0">
          <svg className="w-full h-full" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20 15C21.1046 15 22 14.1046 22 13C22 11.8954 21.1046 11 20 11C18.8954 11 18 11.8954 18 13C18 14.1046 18.8954 15 20 15Z" stroke="#3D3936" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20 29C21.1046 29 22 28.1046 22 27C22 25.8954 21.1046 25 20 25C18.8954 25 18 25.8954 18 27C18 28.1046 18.8954 29 20 29Z" stroke="#3D3936" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13 29C14.1046 29 15 28.1046 15 27C15 25.8954 14.1046 25 13 25C11.8954 25 11 25.8954 11 27C11 28.1046 11.8954 29 13 29Z" stroke="#3D3936" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M27 29C28.1046 29 29 28.1046 29 27C29 25.8954 28.1046 25 27 25C25.8954 25 25 25.8954 25 27C25 28.1046 25.8954 29 27 29Z" stroke="#3D3936" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20 24V16" stroke="#3D3936" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13 25V23C13 20.7909 14.7909 19 17 19H23C25.2091 19 27 20.7909 27 23V25" stroke="#3D3936" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>


          </button>
</div>
        </div>
      </div>

      <div className="grid gap-4 sm:gap-6 grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {people.map((person) => (
          <article
            key={person.name}
            className="bg-white rounded-xl sm:rounded-2xl border border-slate-100 p-4 sm:p-6 flex flex-col items-center text-center"
          >
            <div className="relative">
              <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full bg-slate-100 overflow-hidden">
                <img
                  src={person.image ?? avatarSrc}
                  alt={person.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = avatarSrc;
                  }}
                />
              </div>

              
            </div>

            <h2 className="mt-3 sm:mt-4 text-sm sm:text-base font-semibold text-slate-800 line-clamp-1">{person.name}</h2>
            <p className="mt-0.5 text-xs sm:text-sm text-[#947550] line-clamp-1">{person.role}</p>

            <div className="mt-3 flex items-center justify-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
              <span className="w-1.5 h-1.5 rounded-full bg-amber-300" />
              <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
            </div>
          </article>
        ))}
      </div>

      <div className="flex flex-col gap-5 text-xs text-slate-500 sm:flex-row sm:items-center fixed bottom-0 bg-white w-full py-4">
        <div>
          Rows per page:{" "}
          <select
            defaultValue="100"
            className="ml-1 rounded-lg border border-slate-200 px-2 py-1 bg-white"
          >
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-slate-600">1-100 of 500</span>
          <span className="ml-2 inline-flex items-center gap-1">
            <button className="w-7 h-7 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition-colors">
              <svg className="w-4 h-4 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button className="w-7 h-7 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition-colors">
              <svg className="w-4 h-4 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </span>
        </div>
      </div>
    </section>
  );
}
