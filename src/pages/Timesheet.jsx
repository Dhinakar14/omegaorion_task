const summaryCards = [
  { image: "/assets/table-5.png", label: "Total", value: "169" },
  { label: "Regular", value: "7" },
  { label: "Overtime", value: "320", customIcon: "overtime" },
  { label: "OT2", value: "20", customIcon: "ot2" },
  { label: "Holiday", value: "8", customIcon: "holiday" },
  { label: "Anomalies", value: "3",  customIcon: "anomalies" },
];

const rows = [
  {
    employee: "Micheal Shaun",
    avatar: "/assets/table-5.png",
    total: "07:23",
    regular: "07:23",
    overtime: "-",
    ot2: "-",
    holiday: "-",
  },
  {
    employee: "Ethan Lee",
    avatar: "/assets/table-4.png",
    total: "08:28",
    regular: "08:00",
    overtime: "-",
    ot2: "-",
    holiday: "0.28",
  },
  {
    employee: "Emily Baker",
    avatar: "/assets/table-3.png",
    total: "09:53",
    regular: "05:20",
    overtime: "01:21",
    ot2: "-",
    holiday: "03:12",
  },
  {
    employee: "Liam Carter",
    avatar: "/assets/table-2.png",
    total: "10:46",
    regular: "7.34",
    overtime: "02:01",
    ot2: "-",
    holiday: "01:11",
  },
  {
    employee: "Grace Kim",
    avatar: "/assets/table-1.png",
    total: "12:59",
    regular: "06:46",
    overtime: "04:00",
    ot2: "01:10",
    holiday: "01:03",
  },
  {
    employee: "Noah Williams",
    avatar: "/assets/table-6.png",
    total: "16:44",
    regular: "07:12",
    overtime: "03:00",
    ot2: "02:12",
    holiday: "02:32",
  },
  {
    employee: "Micheal Shaun",
    avatar: "/assets/table-5.png",
    total: "16:56",
    regular: "12:56",
    overtime: "03:00",
    ot2: "01:00",
    holiday: "-",
  },
  {
    employee: "Liam Carter",
    avatar: "/assets/table-2.png",
    total: "15:03",
    regular: "06:27",
    overtime: "04:12",
    ot2: "3:02",
    holiday: "1:22",
  },
];

function getInitials(name) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase())
    .join("");
}

function initialsBg(name) {
  const palette = [
    "bg-slate-200",
    "bg-rose-200",
    "bg-amber-200",
    "bg-emerald-200",
    "bg-sky-200",
    "bg-violet-200",
  ];
  let hash = 0;
  for (let i = 0; i < name.length; i++) hash = (hash * 31 + name.charCodeAt(i)) >>> 0;
  return palette[hash % palette.length];
}

export default function Timesheet() {
  return (
    <section className="flex flex-col gap-4 sm:gap-5 px-2 sm:px-0">
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
        <div className="flex items-center gap-1 sm:gap-2 justify-end text-sm flex-wrap">
         <div className="border rounded-full p-1.5 sm:p-2 flex items-center gap-1 sm:gap-2 text-xs sm:text-sm"> <button className="w-7 h-7 sm:w-9 sm:h-9 flex items-center justify-center flex-shrink-0">
          <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.5 10.8333C17.5 15.9259 15.8333 17.5 10 17.5C4.16667 17.5 2.5 15.9259 2.5 10.4167C2.5 4.9074 4.16667 3.33333 10 3.33333C15.8333 3.33333 17.5 4.9074 17.5 10.8333Z" stroke="#3D3936" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13.3333 5L13.3333 2.5" stroke="#3D3936" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.66669 5L6.66669 2.5" stroke="#3D3936" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<line x1="6.58331" y1="8.41667" x2="13.4166" y2="8.41667" stroke="#3D3936" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
          </button>
          <span className="text-slate-600 whitespace-nowrap hidden sm:inline">Nov 6, 2025 - Nov 6, 2025</span>
          <span className="text-slate-600 sm:hidden">Nov 6</span>
          </div>
          <button className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0">
          <svg className="w-full h-full" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" y="0.5" width="47" height="47" rx="13.5" stroke="#E5E5E4"/>
<path d="M15 18.5867C15 17.0347 18 16 24 16C30 16 33 17.0347 33 18.5867C33 21 26 24 26 26.3466C26 28.416 26 28.416 26 29.968C26 31.52 22 33.072 22 31.0026C22 28.9333 22 28.9333 22 26.3466C22 24 15 21 15 18.5867Z" stroke="#3D3936" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

          </button>
          <button className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0">
          <svg className="w-full h-full" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" y="0.5" width="47" height="47" rx="13.5" stroke="#E5E5E4"/>
<path d="M32 26C32 31.5 31 32 24 32C17 32 16 31.5 16 26" stroke="#3D3936" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M24 16L24 27" stroke="#3D3936" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20 23L24 27L28 23" stroke="#3D3936" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

          </button>
          
        </div>
      </div>

      <div className="grid gap-2 sm:gap-3 grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 w-full sm:w-[90%]">
        {summaryCards.map((card) => (
          <div
            key={card.label}
            className={`bg-white rounded-xl sm:rounded-2xl px-3 py-2 sm:px-4 sm:py-3 flex flex-col gap-1 border ${
              card.variant === "danger" ? "border border-rose-200" : ""
            }`}
          >
            {card.customIcon === "overtime" ? (
              <svg className="w-8 h-8 sm:w-10 sm:h-10" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 12C0 5.37258 5.37258 0 12 0H28C34.6274 0 40 5.37258 40 12V28C40 34.6274 34.6274 40 28 40H12C5.37258 40 0 34.6274 0 28V12Z" fill="#FF5100" fillOpacity="0.1"/>
                <path d="M15.7301 16.53C14.7412 15.2115 15.682 13.33 17.3301 13.33H22.6601C24.3082 13.33 25.2489 15.2115 24.2601 16.53L22.5613 18.795C22.028 19.5061 22.028 20.4839 22.5613 21.195L24.2601 23.46C25.2489 24.7785 24.3082 26.66 22.6601 26.66H17.3301C15.682 26.66 14.7412 24.7785 15.7301 23.46L17.4288 21.195C17.9622 20.4839 17.9622 19.5061 17.4288 18.795L15.7301 16.53Z" stroke="#FF5100" strokeWidth="1.5"/>
              </svg>
            ) : card.customIcon === "ot2" ? (
              <svg className="w-8 h-8 sm:w-10 sm:h-10" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 12C0 5.37258 5.37258 0 12 0H28C34.6274 0 40 5.37258 40 12V28C40 34.6274 34.6274 40 28 40H12C5.37258 40 0 34.6274 0 28V12Z" fill="#9BAE88" fillOpacity="0.1"/>
                <path d="M25 24.9306C25 25.9926 22.5 26.6667 20 26.6667C17.0833 26.6667 15 25.9926 15 24.9306C15 23.3814 17.5 22.5 20 22.5C22.5 22.5 25 23.5417 25 24.9306Z" stroke="#9BAE88" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M20 20C21.841 20 23.3334 18.5076 23.3334 16.6667C23.3334 14.8257 21.841 13.3333 20 13.3333C18.1591 13.3333 16.6667 14.8257 16.6667 16.6667C16.6667 18.5076 18.1591 20 20 20Z" stroke="#9BAE88" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M27.0833 24.445C27.9541 24.1981 28.3333 23.7892 28.3333 23.2673C28.3333 22.259 26.8842 21.4711 25 21.2896" stroke="#9BAE88" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M25 19.1667C26.1506 19.1667 27.0833 18.2339 27.0833 17.0833C27.0833 15.9327 26.1506 15 25 15" stroke="#9BAE88" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12.9167 24.445C12.0459 24.1981 11.6667 23.7892 11.6667 23.2673C11.6667 22.259 13.1158 21.4711 15 21.2896" stroke="#9BAE88" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M15 19.1667C13.8494 19.1667 12.9167 18.2339 12.9167 17.0833C12.9167 15.9327 13.8494 15 15 15" stroke="#9BAE88" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            ) : card.customIcon === "holiday" ? (
              <svg className="w-8 h-8 sm:w-10 sm:h-10" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 12C0 5.37258 5.37258 0 12 0H28C34.6274 0 40 5.37258 40 12V28C40 34.6274 34.6274 40 28 40H12C5.37258 40 0 34.6274 0 28V12Z" fill="#316094" fillOpacity="0.1"/>
                <path d="M20 24.1667V23.3333M21.7361 17.5758C21.3889 17.0303 20.6945 16.6667 19.9306 16.6667C18.8195 16.6667 17.9167 17.4545 17.9167 18.4848C17.9167 18.4848 17.9167 20 20 20C22.0834 20 22.0834 21.5151 22.0834 21.5151C22.0834 22.5454 21.1806 23.3333 20.0695 23.3333C19.3056 23.3333 18.6111 22.9697 18.2639 22.4242M20 16.6667V15.8333" stroke="#316094" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M20 12.5C15.8579 12.5 12.5 15.8579 12.5 20C12.5 24.1421 15.8579 27.5 20 27.5C24.1421 27.5 27.5 24.1421 27.5 20C27.5 15.8579 24.1421 12.5 20 12.5Z" stroke="#316094" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            ) : card.customIcon === "anomalies" ? (
              <svg className="w-8 h-8 sm:w-10 sm:h-10" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 12C0 5.37258 5.37258 0 12 0H28C34.6274 0 40 5.37258 40 12V28C40 34.6274 34.6274 40 28 40H12C5.37258 40 0 34.6274 0 28V12Z" fill="#BC1C1C" fillOpacity="0.1"/>
                <path d="M25.1667 28.4375H14.8333C14.1738 28.4375 13.5257 28.2652 12.9532 27.9378C12.3807 27.6104 11.9036 27.1392 11.5692 26.5708C11.2347 26.0024 11.0545 25.3565 11.0463 24.697C11.0381 24.0375 11.2023 23.3874 11.5225 22.8108L16.6892 13.5108C17.0172 12.9204 17.4972 12.4284 18.0793 12.0859C18.6614 11.7434 19.3246 11.5628 20 11.5628C20.6754 11.5628 21.3386 11.7434 21.9207 12.0859C22.5029 12.4284 22.9828 12.9204 23.3108 13.5108L28.4775 22.8108C28.7978 23.3874 28.9619 24.0375 28.9537 24.697C28.9455 25.3565 28.7653 26.0024 28.4308 26.5708C28.0964 27.1392 27.6193 27.6104 27.0468 27.9378C26.4743 28.2652 25.8262 28.4375 25.1667 28.4375ZM20 12.8125C19.5468 12.8093 19.1012 12.9289 18.7106 13.1587C18.32 13.3885 17.999 13.7198 17.7817 14.1175L12.6158 23.4167C12.401 23.8029 12.2908 24.2386 12.2961 24.6805C12.3014 25.1224 12.4221 25.5553 12.6461 25.9363C12.8702 26.3173 13.1898 26.6331 13.5735 26.8526C13.9571 27.072 14.3914 27.1875 14.8333 27.1875H25.1667C25.6085 27.1872 26.0427 27.0716 26.4262 26.8521C26.8097 26.6326 27.1292 26.3168 27.3532 25.9359C27.5772 25.555 27.6979 25.1222 27.7033 24.6804C27.7087 24.2386 27.5987 23.803 27.3842 23.4167L22.2175 14.1167C22.0002 13.7192 21.6793 13.3881 21.2888 13.1584C20.8984 12.9288 20.453 12.8092 20 12.8125Z" fill="#BC1C1C"/>
                <path d="M20 21.4583C19.8342 21.4583 19.6753 21.3925 19.5581 21.2753C19.4408 21.1581 19.375 20.9991 19.375 20.8333V17.5C19.375 17.3342 19.4408 17.1753 19.5581 17.0581C19.6753 16.9408 19.8342 16.875 20 16.875C20.1658 16.875 20.3247 16.9408 20.4419 17.0581C20.5592 17.1753 20.625 17.3342 20.625 17.5V20.8333C20.625 20.9991 20.5592 21.1581 20.4419 21.2753C20.3247 21.3925 20.1658 21.4583 20 21.4583Z" fill="#BC1C1C"/>
                <path d="M20 24.1667C20.4603 24.1667 20.8334 23.7936 20.8334 23.3333C20.8334 22.8731 20.4603 22.5 20 22.5C19.5398 22.5 19.1667 22.8731 19.1667 23.3333C19.1667 23.7936 19.5398 24.1667 20 24.1667Z" fill="#BC1C1C"/>
              </svg>
            ) : (
              <svg className="w-8 h-8 sm:w-10 sm:h-10" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="40" height="40" rx="12" fill="#9BAE88" fillOpacity="0.1"/>
                <circle cx="20" cy="20" r="7.5" stroke="#3D3936" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M19.5833 16.6667L19.5833 20.4167L22.9166 21.6667" stroke="#3D3936" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            )}
            
            <div className="text-[10px] sm:text-xs text-slate-500">{card.label}</div>
            <div className="text-sm sm:text-lg font-semibold">{card.value}</div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl sm:rounded-2xl px-2 sm:px-5 py-3 sm:py-4 overflow-x-auto -mx-2 sm:mx-0">
        <table className="min-w-full text-xs sm:text-sm border-separate border-spacing-0">
          <thead>
            <tr>
              <th className="text-left text-slate-500 font-medium px-2 sm:px-4 py-2 sm:py-3 rounded-l-xl sm:rounded-l-2xl border border-slate-200 border-r-0">
                <div className="flex items-center gap-1 sm:gap-2 cursor-pointer hover:text-slate-700 whitespace-nowrap">
                  <span className="hidden sm:inline">Employee</span>
                  <span className="sm:hidden">Emp</span>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.91663 11.0833V1.75" stroke="#947550" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.25 4.08333L9.91671 1.75L7.58337 4.08333" stroke="#947550" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4.08337 2.91666V12.25" stroke="#947550" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1.75 9.91666L4.08333 12.25L6.41667 9.91666" stroke="#947550" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>                </div>
              </th>
              <th className="text-left text-slate-500 font-medium px-2 sm:px-4 py-2 sm:py-3 border-y border-slate-200">
                <div className="flex items-center gap-1 sm:gap-2 cursor-pointer hover:text-slate-700 whitespace-nowrap">
                  Total
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.33331 12.25V1.75" stroke="#947550" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.25 4.66667L9.33335 1.75L6.41669 4.66667" stroke="#947550" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.41667 11.6667H1.75" stroke="#947550" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.41669 9.33334H2.91669" stroke="#947550" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.41665 7H4.08331" stroke="#947550" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</div>
              </th>
              <th className="text-left text-slate-500 font-medium px-2 sm:px-4 py-2 sm:py-3 border-y border-slate-200">
                <div className="flex items-center gap-1 sm:gap-2 cursor-pointer hover:text-slate-700 whitespace-nowrap">
                  <span className="hidden sm:inline">Regular</span>
                  <span className="sm:hidden">Reg</span>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.33331 12.25V1.75" stroke="#947550" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.25 4.66667L9.33335 1.75L6.41669 4.66667" stroke="#947550" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.41667 11.6667H1.75" stroke="#947550" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.41669 9.33334H2.91669" stroke="#947550" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.41665 7H4.08331" stroke="#947550" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</div>
              </th>
              <th className="text-left text-slate-500 font-medium px-2 sm:px-4 py-2 sm:py-3 border-y border-slate-200">
                <div className="flex items-center gap-1 sm:gap-2 cursor-pointer hover:text-slate-700 whitespace-nowrap">
                  <span className="hidden sm:inline">Overtime</span>
                  <span className="sm:hidden">OT</span>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.91669 11.0833V1.75" stroke="#947550" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.25 4.08333L9.91665 1.75L7.58331 4.08333" stroke="#947550" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4.08331 2.91666V12.25" stroke="#947550" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1.75 9.91666L4.08333 12.25L6.41667 9.91666" stroke="#947550" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</div>
              </th>
              <th className="text-left text-slate-500 font-medium px-2 sm:px-4 py-2 sm:py-3 border-y border-slate-200">
                <div className="flex items-center gap-1 sm:gap-2 cursor-pointer hover:text-slate-700 whitespace-nowrap">
                  OT 2
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.91666 11.0833V1.75" stroke="#947550" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.25 4.08333L9.91668 1.75L7.58334 4.08333" stroke="#947550" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4.08334 2.91666V12.25" stroke="#947550" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1.75 9.91666L4.08333 12.25L6.41667 9.91666" stroke="#947550" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</div>
              </th>
              <th className="text-left text-slate-500 font-medium px-2 sm:px-4 py-2 sm:py-3 rounded-r-xl sm:rounded-r-2xl border border-slate-200 border-l-0">
                <div className="flex items-center gap-1 sm:gap-2 cursor-pointer hover:text-slate-700 whitespace-nowrap">
                  <span className="hidden sm:inline">Holiday</span>
                  <span className="sm:hidden">Hol</span>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.91666 11.0833V1.75" stroke="#947550" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.25 4.08333L9.91668 1.75L7.58334 4.08333" stroke="#947550" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4.08334 2.91666V12.25" stroke="#947550" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1.75 9.91666L4.08333 12.25L6.41667 9.91666" stroke="#947550" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</div>
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => {
              const isLastRow = index === rows.length - 1;
              const rowBorderClass = isLastRow ? "" : "border-b border-slate-100";
              return (
                <tr key={row.employee}>
                  <td className={`px-2 sm:px-4 py-3 sm:py-4 ${rowBorderClass}`}>
                    <div className="flex items-center gap-2 sm:gap-3">
                      {row.avatar ? (
                        <img
                          src={row.avatar}
                          alt={row.employee}
                          className="w-6 h-6 sm:w-7 sm:h-7 rounded-full object-cover flex-shrink-0"
                        />
                      ) : (
                        <div
                          className={[
                            "w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center text-[10px] sm:text-xs font-semibold text-slate-700 flex-shrink-0",
                            initialsBg(row.employee),
                          ].join(" ")}
                        >
                          {getInitials(row.employee)}
                        </div>
                      )}
                      <span className="text-slate-800 font-medium text-xs sm:text-sm truncate">{row.employee}</span>
                    </div>
                  </td>
                  <td className={`px-2 sm:px-4 py-3 sm:py-4 text-slate-700 text-xs sm:text-sm ${rowBorderClass}`}>{row.total}</td>
                  <td className={`px-2 sm:px-4 py-3 sm:py-4 text-slate-700 text-xs sm:text-sm ${rowBorderClass}`}>{row.regular}</td>
                  <td className={`px-2 sm:px-4 py-3 sm:py-4 text-slate-700 text-xs sm:text-sm ${rowBorderClass}`}>{row.overtime}</td>
                  <td className={`px-2 sm:px-4 py-3 sm:py-4 text-slate-700 text-xs sm:text-sm ${rowBorderClass}`}>{row.ot2}</td>
                  <td className={`px-2 sm:px-4 py-3 sm:py-4 text-slate-700 text-xs sm:text-sm ${rowBorderClass}`}>{row.holiday}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
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
