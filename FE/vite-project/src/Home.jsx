import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const artists = [
  { name: 'Arijit Singh', img: 'https://media.gettyimages.com/id/874104964/photo/mumbai-india-bollywood-singer-arijit-singh-performs-during-live-in-concert-at-mmrda-grounds.jpg?s=612x612&w=0&k=20&c=FwDA_Rt7PGziODgptMYsRW-DpakIgo_ThQIeXMd26ko=', profession: 'Singer' },
  { name: 'Shreya Ghoshal', img: 'https://media.gettyimages.com/id/626114818/photo/mumbai-india-bollywood-singer-shreya-ghoshal-performs-during-the-music-launch-of-movie.jpg?s=612x612&w=0&k=20&c=-YvfNm5BhlwQpT3cqIpZBWnbMzOAJEMipKszxa3TT40=', profession: 'Singer' },
  { name: 'Badshah', img: 'https://media.gettyimages.com/id/498596350/photo/new-delhi-india-rap-singer-badshah-during-the-wedding-reception-of-chirag-oberoi-and-saisha.jpg?s=612x612&w=0&k=20&c=x4Vq2-sKVSEjnv4UAbBKXyguMJFpkG0ZnJcvs1d7Aoc=', profession: 'Rapper' },
  { name: 'A.R. Rahman', img: 'https://media.gettyimages.com/id/1446647858/photo/jeddah-saudi-arabia-a-r-rahman-performs-on-stage-during-the-red-sea-international-film.jpg?s=612x612&w=0&k=20&c=ytKEbU6cARTVXUcJXMKDT1voGDPS_5JWTPmHnZ-_L2E=', profession: 'Music Composer' },
  { name: 'Neha Kakkar', img: 'https://media.gettyimages.com/id/543110730/photo/indian-bollywood-singer-neha-kakkar-performs-during-an-event-in-chennai-on-late-25-june-2016.jpg?s=612x612&w=0&k=20&c=BivPMIz20O6I880gGrNJ_K5b8K9qIYD32YYDzgTtylU=', profession: 'Singer' },
  { name: 'Guru Randhawa', img: 'https://media.gettyimages.com/id/965171086/photo/gurugram-india-punjabi-singer-guru-randhawa-performs-during-a-hindustan-times-friday-jam.jpg?s=612x612&w=0&k=20&c=80wVjStkyFUrwGvOBH7vgfSGzFVtLZKEXfZgP7WK-0o=', profession: 'Singer' },
  { name: 'Mika Singh', img: 'https://media.gettyimages.com/id/899825450/photo/new-delhi-india-december-25-host-singer-mika-singh-during-the-christmas-party-on-december-25.jpg?s=612x612&w=0&k=20&c=VmjSWEqvIp09S_Jjo-nwg8v-hpZpfFVAv6V0fTKKQZA=', profession: 'Singer' },
  { name: 'Sunidhi Chauhan', img: 'https://media.gettyimages.com/id/490203840/photo/new-york-ny-musician-sunidhi-chauhan-performs-onstage-at-the-2015-global-citizen-festival-to.jpg?s=612x612&w=0&k=20&c=yuXvne5UAdSqppckJQ1lngBZUkF-_Hr5AEhRjPfDkvc=', profession: 'Singer' },
  { name: 'Yo Yo Honey Singh', img: 'https://media.gettyimages.com/id/148056965/photo/new-delhi-india-yo-yo-honey-singh-performs-at-the-india-gate-in-new-delhi.jpg?s=612x612&w=0&k=20&c=OzjfKJSQRcj4ZNgpQ-aWbiZIEBRFcV7Yka-mdIXDSxQ=', profession: 'Rapper' },
  { name: 'Amit Trivedi', img: 'https://media.gettyimages.com/id/1247534203/photo/bollywood-playback-singers-nikhita-gandhi-armaan-malik-music-director-amit-trivedi-and-rapper.jpg?s=612x612&w=0&k=20&c=vJcKFCQ8Gm_1UE2eWh4equEvtwhkv39rl4Kyq_SmYpY=', profession: 'Music Composer' },
  { name: 'Shankar-Ehsaan-Loy', img: 'https://media.gettyimages.com/id/1196147358/photo/shankar-ehsaan-loy-perform-during-a-live-show.jpg?s=612x612&w=0&k=20&c=tQl0kzImOZhnQ1DJWXVnP-FnnzGm2P-kjTZL0wD0uA=', profession: 'Music Composer' },
  { name: 'Harshdeep Kaur', img: 'https://media.gettyimages.com/id/1187088508/photo/harshdeep-kaur-performs-during-a-live-event.jpg?s=612x612&w=0&k=20&c=2xnO8-sj9AtKkJcrRe9LxvJrwITJb9hRgt6nlgdR-c=', profession: 'Singer' },
  { name: 'Shekhar Ravjiani', img: 'https://media.gettyimages.com/id/1151357310/photo/shekhar-ravjiani-performs-during-a-live-event.jpg?s=612x612&w=0&k=20&c=RQzYG49BZjWcHtA7Q3hnZ8oSD6CzZ9RuFop2ZBqI4Hg=', profession: 'Music Composer' },
  { name: 'Himesh Reshammiya', img: 'https://media.gettyimages.com/id/1151255406/photo/himesh-reshammiya-performs-during-a-live-show.jpg?s=612x612&w=0&k=20&c=PUoY7So33-L7pK4WLPicqAy-k_iHlG1H1dV8XYO9oc=', profession: 'Singer' },
  { name: 'Shalmali Kholgade', img: 'https://media.gettyimages.com/id/1194726211/photo/shalmali-kholgade-performs-during-a-live-concert.jpg?s=612x612&w=0&k=20&c=Gg-oxI7u4G9U4r6v4yzZHrJtPOqxLLnpZVq-8Yt8m4=', profession: 'Singer' },
  { name: 'Kanika Kapoor', img: 'https://media.gettyimages.com/id/1147074628/photo/kanika-kapoor-performs-during-a-live-event.jpg?s=612x612&w=0&k=20&c=_FbLZJ0B4wVrV8miCI6RtKphdx2G_JIow9KrW3omKM=', profession: 'Singer' },
  { name: 'Armaan Malik', img: 'https://media.gettyimages.com/id/1220657890/photo/armaan-malik-performs-during-a-live-show.jpg?s=612x612&w=0&k=20&c=fJf-0eQ5wZ8Rj5SydRt_ueX0HvI3kOtfg0CjPCxb_Q=', profession: 'Singer' },
  { name: 'Jonita Gandhi', img: 'https://media.gettyimages.com/id/1174170218/photo/jonita-gandhi-performs-during-a-live-event.jpg?s=612x612&w=0&k=20&c=7HhRaNQusIrP9alFqaE3tMbvAk1fK-Vr7LM6ik3mXos=', profession: 'Singer' },
  { name: 'Benny Dayal', img: 'https://media.gettyimages.com/id/1172685800/photo/benny-dayal-performs-during-a-live-show.jpg?s=612x612&w=0&k=20&c=0pt0GgYdMJb-jUO43ZpuEjZ-RFgkshHptVph7eXFOiQ=', profession: 'Singer' },
  { name: 'Monali Thakur', img: 'https://media.gettyimages.com/id/1151146632/photo/monali-thakur-performs-during-a-live-concert.jpg?s=612x612&w=0&k=20&c=eCSO6L5EY9iXGqV3NkCqWEe0Jlq6tycoq2Uw2zUtT6M=', profession: 'Singer' },
  { name: 'Ankit Tiwari', img: 'https://media.gettyimages.com/id/1194087314/photo/ankit-tiwari-performs-during-a-live-event.jpg?s=612x612&w=0&k=20&c=gwX5Xix4HnPo1cO3KOX3gdlOYk9b1cFl61zG9QU3YpY=', profession: 'Singer' },
];

export default function Home() {
  const [show, setShow] = useState(artists);
  const [page, setPage] = useState(1);
  const pageLength = 5;
  const navigate = useNavigate(); // For navigation



  const x = Math.ceil(show.length / pageLength);

  const handlePrev = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNext = () => {
    if (page < x) {
      setPage(page + 1);
    }
  };

  // Pagination logic
  const startIndex = (page - 1) * pageLength;
  const endIndex = startIndex + pageLength;
  const currentIndex = show.slice(startIndex, endIndex);

  return (
    <div>
      <div className='inputHead'>
        <input
          type="text"
          placeholder='Search your artist...'
          className='input'
          onChange={(e) => {
            const value = e.target.value.toLowerCase();
            const filtered = artists.filter(artist =>
              artist.name.toLowerCase().includes(value)
            );
            setShow(filtered);
          }}
        />
      </div>

      <div className='artist-list'>
        {currentIndex.map((artist, index) => (
          <div key={index} className='artist-card'>
            <img src={artist.img} alt={artist.name} className='artist-img' />
            <h3>{artist.name}</h3>
            <p>{artist.profession}</p>
            <button onClick={() => navigate(`/artist/${index}`)}>Book Your Events</button>
          </div>
        ))}
      </div>

      <div className='paginateBtn'>
        <button onClick={handlePrev} disabled={page === 1}>Prev</button>
        <button>{page}</button>
        <button onClick={handleNext} disabled={page === x}>Next</button>
      </div>
    </div>
  );
}
