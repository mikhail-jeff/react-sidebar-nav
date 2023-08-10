import React, { useState } from 'react';
import Icon from '../Images/Icon.svg';
import Profile from '../Images/profile.png';
import Dashboard from '../Images/dashboard.svg';
import Transactions from '../Images/transactions.svg';
import Performance from '../Images/performance.svg';
import News from '../Images/news.svg';
import Settings from '../Images/settings.svg';
import Support from '../Images/support.svg';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Sidebar = () => {
	const location = useLocation();

	const [closeMenu, setCloseMenu] = useState(false);

	const handleCLoseMenu = () => {
		setCloseMenu(!closeMenu);
	};

	return (
		<div className={closeMenu === false ? 'sidebar' : 'sidebar active'}>
			{/* LOGO CONTAINER */}
			<div className={closeMenu === false ? 'logoContainer' : 'logoContainer active'}>
				<img
					src={Icon}
					alt='icon'
					className='logo'
				/>
				<h2 className='title'>LOGO.</h2>
			</div>

			{/* BURGER CONTAINER */}
			<div className={closeMenu === false ? 'burgerContainer' : 'burgerContainer active'}>
				<div
					className='burgerTrigger'
					onClick={() => {
						handleCLoseMenu();
					}}></div>
				<div className='burgerMenu'></div>
			</div>

			{/* PROFILE CONTAINER */}
			<div className={closeMenu === false ? 'profileContainer' : 'profileContainer active'}>
				<img
					src={Profile}
					alt='profile'
					className='profile'
				/>
				<div className='profileContent'>
					<p className='name'>Hello, John Doe.</p>
					<p>johndoe@email.com</p>
				</div>
			</div>

			{/* CONTENT CONTAINER */}
			<div className={closeMenu === false ? 'contentsContainer' : 'contentsContainer active'}>
				<ul>
					<li className={location.pathname === '/' ? 'active' : ''}>
						<img
							src={Dashboard}
							alt='dashboard'
						/>
						<Link
							to='/'
							className='a'>
							Dashboard
						</Link>
					</li>
					<li className={location.pathname === '/transactions' ? 'active' : ''}>
						<img
							src={Transactions}
							alt='transactions'
						/>
						<Link
							to='/transactions'
							className='a'>
							Transactions
						</Link>
					</li>
					<li className={location.pathname === '/performance' ? 'active' : ''}>
						<img
							src={Performance}
							alt='performance'
						/>
						<Link
							to='/performance'
							className='a'>
							Performance
						</Link>
					</li>
					<li className={location.pathname === '/news' ? 'active' : ''}>
						<img
							src={News}
							alt='news'
						/>
						<Link
							to='/news'
							className='a'>
							News
						</Link>
					</li>
					<li className={location.pathname === '/settings' ? 'active' : ''}>
						<img
							src={Settings}
							alt='settings'
						/>
						<Link
							to='/settings'
							className='a'>
							Settings
						</Link>
					</li>
					<li className={location.pathname === '/support' ? 'active' : ''}>
						<img
							src={Support}
							alt='support'
						/>
						<Link
							to='/support'
							className='a'>
							Support
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Sidebar;
