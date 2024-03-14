
import PropTypes from 'prop-types'
IsTicketAble.propTypes={
    isTrue:PropTypes.bool.isRequired
}
export default function IsTicketAble({isTrue}){
    const ticketingSyle = isTrue?'success':'danger';
    const bgStyle = 'bg-'+ticketingSyle+'-subtle';
    const borderStyle = 'border-'+ ticketingSyle+'-subtle';
    const ticketingClass = ['d-inline-flex', 'mb-3', 'px-2', 'py-0' ,'border', 'rounded-2',bgStyle,borderStyle].join(' ');
    return (
        <span className={ticketingClass}> 
            isTicketAble : {isTrue?'Yes':'No'}
        </span>
    )
}