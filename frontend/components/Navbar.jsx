// import Link from "next/link";

export default function Navbar() {
    return (
        <>
<div className="dui-navbar bg-base-100">
  <div className="flex-1">
    <a className="dui-btn dui-btn-ghost normal-case text-xl">daisyUI</a>
  </div>
  <div className="flex-none gap-2">
    <div className="dui-form-control">
      <input type="text" placeholder="Search" className="dui-input dui-input-bordered w-24 md:w-auto" />
    </div>
    <div className="dui-dropdown dui-dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </label>
      <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="dui-badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>
        </>
    )
}
