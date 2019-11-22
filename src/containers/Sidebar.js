import { connect } from 'react-redux';
import SidebarComponent from '../components/Sidebar';

export const Sidebar = connect((state,callback)=>({
	users:state.users,
	callback:state
}),{})(SidebarComponent);