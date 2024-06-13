 
const Booklist = ({ username, tag, location, image, stats }) => {
  return (
   <div>
      <div>
       <img className="image" src={image} alt={username} />
  <p className='username'>{username}</p>
    <p className='tag'>{tag}</p>
    <p className='location'>{location}</p>
  </div>

  <ul className='stats'>
    <li>
      <span>Followers</span>
      <span>{stats.followers}</span>
    </li>
    <li>
      <span>Views</span>
      <span>{stats.views}s</span>
    </li>
    <li>
      <span>Likes</span>
      <span>{stats.likes}</span>
    </li>
  </ul>
</div>
  )
}

export default Booklist