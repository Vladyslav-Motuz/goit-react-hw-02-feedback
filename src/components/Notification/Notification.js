import PropTypes from 'prop-types';
const Notification = ( {title} ) => {
    return (<p>{title}</p>)
}
Notification.propTypes = {
    title: PropTypes.string,    
}
export default Notification;