// import React from 'react';
// import styles from "./Sidebar.module.css";
// import { useDispatch, useSelector } from 'react-redux';
// import {closeSidebar} from "./Sidebar.module.css";
// import logo from "../../public/img/logo.png"
// import home from "../../public/img/home.svg"
// import cart from "../../public/img/cart.svg"
// import payment from "../../public/img/payment.svg"
// import Link from 'next/link';
// import { FaTimes } from 'react-icons/fa';

// const Sidebar = () => {
//     const dispatch = useDispatch();
//     const {isSidebarOpen} = useSelector((state) => state.sidebar);
//     consol.logo(isSidebarOpen)
//     return (
//         <aside className={isSidebarOpen ? "show-sidebar sidebar" : "sidebar"}>
//             <div className={styles.sidebar_header}>
//                 <Image src={logo} width={200} height={200} alt='logo' /> 
//                 <button type='button' onClick={() => dispatch(closeSidebar())}>
//                     <FaTimes />
//                 </button>
//             </div>
//             <nav className={styles.sidebar_nav}>
//                 <ul>
//                     <Link href="/">
//                     <li><Image src={home} height={200} width={200} alt='home' />
//                     </li>
//                 </Link>
//                     <Link href="/products">
//                     <li>
//                             <Image src={cart} height={200} width={200} alt='product'/>
//                     </li>
//                 </Link>
//                 <Link href="/payment">
//                 <li>
//                     <Image src={payment} alt='payments' width={200} height={200} />
//                     </li>
//                 </Link>
//                 </ul>
//             </nav>
//         </aside>
//     );
// };

// export default Sidebar;