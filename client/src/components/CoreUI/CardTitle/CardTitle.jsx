import './CardTitle.css';

const CardTitle = ({label, element}) => {
  switch (element) {
    case 'h2':
      return (
        <div className="CardTitle">
          <h2 className='CardTitle_text'>{label}</h2>
        </div>
      );
    case 'h3':
      return (
        <div className="CardTitle">
          <h3 className='CardTitle_text'>{label}</h3>
        </div>
      );
    case 'h4':
      return (
        <div className="CardTitle">
          <h4 className='CardTitle_text'>{label}</h4>
        </div>
      );
    default:
      return(
        <div className="CardTitle">
          <p className='CardTitle_text'>{label}</p>
        </div>
      )
  }
};
export default CardTitle;