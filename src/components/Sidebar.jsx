import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const navItems = [
  { label: "Home", path: "/", icon: "home" },
  { label: "My Info", path: "/my-info", icon: "user" },
  { label: "People", path: "/people", icon: "users" },
  {
    label: "Team Management",
    path: "/team-management/timesheet",
    icon: "team",
    children: [
      { label: "Timesheet", path: "/team-management/timesheet" },
      { label: "Reimbursement", path: "/team-management/reimbursement" },
    ],
  },
  { label: "Project Setup", path: "/project-setup", icon: "project" },
  { label: "Hiring", path: "/hiring", icon: "hiring" },
  { label: "Report", path: "/report", icon: "report" },
];

// Icon component that returns SVG based on icon name
const MenuIcon = ({ icon, className = "w-4 h-4" }) => {
  const iconProps = {
    className,
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24",
  };

  switch (icon) {
    case "home":
      return (
        <svg {...iconProps} viewBox="0 0 17 17">
          <path
            d="M15.75 11.7194C15.75 15.4694 15.3333 15.4694 8.24999 15.4694C1.16667 15.4694 0.75 15.4694 0.75 11.7194C0.750025 9.935 0.75 7.55272 0.75 5.88606C0.75 4.30272 1.50208 4.22356 7.29311 1.00445C7.88781 0.673864 8.61806 0.664487 9.22002 0.981656C15.3722 4.22319 15.75 4.299 15.75 5.88606C15.75 9.01951 15.75 9.10166 15.75 11.7194Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <path
            d="M5.75 15.0527V12.7194C5.75 12.1671 6.19772 11.7194 6.75 11.7194H9.75C10.3023 11.7194 10.75 12.1671 10.75 12.7194V15.0527"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            fill="none"
          />
        </svg>
      );
    case "user":
      return (
        <svg {...iconProps}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
      );
    case "users":
      return (
        <svg {...iconProps}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      );
    case "team":
      return (
        <svg {...iconProps}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      );
    case "project":
      return (
        <svg {...iconProps}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
          />
        </svg>
      );
    case "hiring":
      return (
        <svg {...iconProps} viewBox="0 0 20 20">
          <ellipse
            cx="8.61112"
            cy="13.8186"
            rx="4.8599"
            ry="2.42995"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
            fill="none"
          />
          <circle
            cx="8.61107"
            cy="6.52873"
            r="2.77708"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
            fill="none"
          />
          <path
            d="M15.2406 6.87585V9.65988M16.6611 8.26717H13.8215"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </svg>
      );
    case "report":
      return (
        <svg {...iconProps} viewBox="0 0 20 20">
          <path
            d="M15.8333 10H9.99996V4.16669C9.99996 3.66669 9.66663 3.33335 9.16663 3.33335C4.99996 3.33335 1.66663 6.66669 1.66663 10.8334C1.66663 15 4.99996 18.3334 9.16663 18.3334C13.3333 18.3334 16.6666 15 16.6666 10.8334C16.6666 10.3334 16.3333 10 15.8333 10ZM9.99996 16.5834C6.83329 17.0834 3.83329 14.8334 3.41663 11.6667C2.91663 8.50002 5.16663 5.50002 8.33329 5.08335V10.8334C8.33329 11.3334 8.66663 11.6667 9.16663 11.6667H14.9166C14.5833 14.25 12.5833 16.25 9.99996 16.5834ZM12.5 1.66669C12 1.66669 11.6666 2.00002 11.6666 2.50002V7.50002C11.6666 8.00002 12 8.33335 12.5 8.33335H17.5C18 8.33335 18.3333 8.00002 18.3333 7.50002C18.3333 4.25002 15.75 1.66669 12.5 1.66669ZM13.3333 6.66669V3.41669C15 3.75002 16.25 5.00002 16.5833 6.66669H13.3333Z"
            fill="currentColor"
          />
        </svg>
      );
    default:
      return null;
  }
};

export default function Sidebar({ currentPath, isOpen = false, onToggle }) {
  const [collapsed, setCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const hasSubmenu = (item) => item.children || item.path === "/my-info" || item.path === "/project-setup";

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleToggle = () => {
    const newCollapsed = !collapsed;
    setCollapsed(newCollapsed);
    if (onToggle && isMobile) {
      onToggle(!newCollapsed);
    }
  };

  // On mobile, use isOpen prop; on desktop, use collapsed state
  const isVisible = isMobile ? isOpen : !collapsed;
  const displayCollapsed = isMobile ? !isOpen : collapsed;

  return (
    <>
      {/* Mobile overlay */}
      {isVisible && isMobile && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => {
            if (onToggle) onToggle(false);
          }}
        />
      )}
      <aside
        className={`fixed left-0 top-0 h-[96vh] bg-[#3d3936] text-slate-50 flex flex-col gap-4 sm:gap-6 m-2 sm:m-4 rounded-lg overflow-y-auto transition-all duration-300 z-50 ${
          displayCollapsed 
            ? "w-16 sm:w-20 px-2 sm:px-3 py-4 sm:py-6 -translate-x-full lg:translate-x-0" 
            : "w-64 px-4 sm:px-5 py-4 sm:py-6"
        }`}
      >
      <div className={`flex items-center gap-2 ${collapsed ? "justify-center" : "justify-between"}`}>
        {!collapsed && (
          <div className="text-2xl font-bold tracking-[0.18em]">
            <img src="/assets/logo.png" alt="logo" />
          </div>
        )}
        <button
          onClick={handleToggle}
          title={displayCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          className="text-slate-400 hover:text-slate-200 transition-colors shrink-0 lg:block hidden"
        >
          {displayCollapsed ? (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
            </svg>
          ) : (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
            </svg>
          )}
        </button>
      </div>

      <nav className="flex-1 flex flex-col gap-1 text-sm">
        {navItems.map((item) => {
          const isTeamManagement = item.path.startsWith("/team-management");
          const isHome = item.path === "/";

          const active = isTeamManagement
            ? currentPath.startsWith("/team-management")
            : isHome
            ? currentPath === "/"
            : currentPath === item.path;
          const baseClasses =
            "flex items-center gap-2 px-3 py-2 rounded-lg transition-colors whitespace-nowrap";
          const activeClasses = active
            ? "bg-slate-100 text-zinc-900"
            : "text-slate-300 hover:bg-white hover:text-zinc-900";
          const showArrow = hasSubmenu(item);

          return (
            <div key={item.label}>
              <NavLink
                to={item.path}
                title={displayCollapsed ? item.label : undefined}
                className={`${baseClasses} ${activeClasses} ${displayCollapsed ? "justify-center px-2" : ""}`}
              >
                <MenuIcon icon={item.icon} />
                {!displayCollapsed && <span className="flex-1">{item.label}</span>}
                {!displayCollapsed && showArrow && (
                  <svg
                    className={`w-3.5 h-3.5 transition-transform ${
                      item.children && currentPath.startsWith("/team-management")
                        ? "rotate-90"
                        : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                )}
              </NavLink>

              {!displayCollapsed && item.children && currentPath.startsWith("/team-management") && (
                <div className="mt-1 ml-6 pl-4 relative flex flex-col gap-1">
                  {/* decorative vertical bracket line */}
                  <div className="pointer-events-none absolute left-0 top-1 bottom-1 flex flex-col justify-between">
                    <img src="/assets/Ethan-1.png" alt="bracket" className="w-full h-[85%]" />
                  </div>
                  {item.children.map((child) => (
                    <NavLink
                      key={child.label}
                      to={child.path}
                      className={({ isActive }) => {
                        const childActiveClasses = isActive
                          ? "bg-white text-amber-700"
                          : "text-slate-300 hover:bg-zinc-800";
                        return [
                          baseClasses,
                          "ml-1",
                          childActiveClasses,
                        ].join(" ");
                      }}
                    >
                      
                      <span className="flex-1">{child.label}</span>
                      <svg
                        className="w-3.5 h-3.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                          className="text-current"
                        />
                      </svg>
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </nav>

      <button
        className={`mt-auto inline-flex items-center justify-center rounded-lg border border-zinc-600 text-sm ${
          displayCollapsed ? "px-2 py-2" : "px-4 py-2"
        }`}
      >
        {displayCollapsed ? (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        ) : (
          "Settings"
        )}
      </button>
    </aside>
    </>
  );
}

