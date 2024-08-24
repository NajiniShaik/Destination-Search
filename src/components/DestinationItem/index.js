import './index.css'

const DestinationItem = props => {
  const {destinationDetails} = props
  const {name, imgUrl} = destinationDetails
  return (
    <li>
      <img src={imgUrl} className="destination-img" alt={name} />
      <p className="destination-title">{name}</p>
    </li>
  )
}

export default DestinationItem
