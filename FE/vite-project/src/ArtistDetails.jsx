import React from 'react';
import { useParams } from 'react-router-dom';

const artists = [
    { id: 0, name: 'Arijit Singh', img: 'https://media.gettyimages.com/id/874104964/photo/mumbai-india-bollywood-singer-arijit-singh-performs-during-live-in-concert-at-mmrda-grounds.jpg?s=612x612&w=0&k=20&c=FwDA_Rt7PGziODgptMYsRW-DpakIgo_ThQIeXMd26ko=', profession: 'Singer', price: '₹10,00,000' },
    { id: 1, name: 'Shreya Ghoshal', img: 'https://media.gettyimages.com/id/626114818/photo/mumbai-india-bollywood-singer-shreya-ghoshal-performs-during-the-music-launch-of-movie.jpg?s=612x612&w=0&k=20&c=-YvfNm5BhlwQpT3cqIpZBWnbMzOAJEMipKszxa3TT40=', profession: 'Singer', price: '₹8,00,000' },
    { id: 2, name: 'Badshah', img: 'https://media.gettyimages.com/id/498596350/photo/new-delhi-india-rap-singer-badshah-during-the-wedding-reception-of-chirag-oberoi-and-saisha.jpg?s=612x612&w=0&k=20&c=x4Vq2-sKVSEjnv4UAbBKXyguMJFpkG0ZnJcvs1d7Aoc=', profession: 'Rapper', price: '₹12,00,000' },
    { id: 3, name: 'A.R. Rahman', img: 'https://media.gettyimages.com/id/1446647858/photo/jeddah-saudi-arabia-a-r-rahman-performs-on-stage-during-the-red-sea-international-film.jpg?s=612x612&w=0&k=20&c=ytKEbU6cARTVXUcJXMKDT1voGDPS_5JWTPmHnZ-_L2E=', profession: 'Music Composer', price: '₹20,00,000' },
    { id: 4, name: 'Neha Kakkar', img: 'https://media.gettyimages.com/id/974170230/photo/bollywood-singer-neha-kakkar-performs-during-the-grand-finale-of-singing-reality-show-telecast.jpg?s=612x612&w=0&k=20&c=2Fn_JcOPlgX5FQuHB5Q1mVnpVRyNqZ4gTkmwaTKFov8=', profession: 'Singer', price: '₹7,00,000' },
    { id: 5, name: 'Sonu Nigam', img: 'https://media.gettyimages.com/id/159002555/photo/mumbai-india-bollywood-singer-sonu-nigam-performs-during-the-sa-re-ga-ma-pa-li-l-champs.jpg?s=612x612&w=0&k=20&c=UQeEdZMy5KjJvEzOS52ro8HExz3bC7Ek_Ka6DiH5G5M=', profession: 'Singer', price: '₹9,00,000' },
    { id: 6, name: 'Sunidhi Chauhan', img: 'https://media.gettyimages.com/id/935014034/photo/bollywood-singer-sunidhi-chauhan-performs-during-a-concert-on-the-occasion-of-international.jpg?s=612x612&w=0&k=20&c=Zh6I9gI0O54CmRQqNiA2YPJ2SDoWaBbsfwJ6z6QLl64=', profession: 'Singer', price: '₹8,50,000' },
    { id: 7, name: 'Atif Aslam', img: 'https://media.gettyimages.com/id/160817765/photo/lahore-pakistan-pakistani-singer-atif-aslam-performs-during-a-concert-at-the-lahore.jpg?s=612x612&w=0&k=20&c=8v8zNZgJAjTpGHHZp0MTzoZaOM6gH4l3-J1rL3Y6nbo=', profession: 'Singer', price: '₹10,50,000' },
    { id: 8, name: 'Mika Singh', img: 'https://media.gettyimages.com/id/1413652751/photo/pune-india-singer-mika-singh-performs-during-the-christmas-music-festival.jpg?s=612x612&w=0&k=20&c=YPb-Z75PQZEtQ-TUQbeUzfNcz0-GHLDNJQodCu-jBjM=', profession: 'Singer', price: '₹6,50,000' },
    { id: 9, name: 'Lata Mangeshkar', img: 'https://media.gettyimages.com/id/52183975/photo/indian-singer-lata-mangeshkar-poses-at-the-release-of-the-her-sisters-album-nargis-bollywood.jpg?s=612x612&w=0&k=20&c=3Aj3_m_ghOQGC42QfuOnbKIpR8Lu5dhXeoNjpXW_zBI=', profession: 'Singer', price: '₹15,00,000' },
    { id: 10, name: 'Kishore Kumar', img: 'https://media.gettyimages.com/id/163741614/photo/indian-singer-kishore-kumar-in-a-publicity-still.jpg?s=612x612&w=0&k=20&c=LEcy_1uC4EVCxxNN1hRO4a28OAP6NOfh5vXKwIw5XaA=', profession: 'Singer', price: '₹18,00,000' },
    { id: 11, name: 'Shankar Mahadevan', img: 'https://media.gettyimages.com/id/141613976/photo/indian-singer-shankar-mahadevan-performs-during-the-2011-iifa-awards-at-roger-arena-in.jpg?s=612x612&w=0&k=20&c=31Ir-6YcyklwdfMY8ZpRtAGzuwp4Ubtq8aUicigR9OE=', profession: 'Singer', price: '₹11,00,000' },
    { id: 12, name: 'Ankit Tiwari', img: 'https://media.gettyimages.com/id/538620810/photo/ankit-tiwari-poses-during-an-exclusive-interview-with-hindustan-times-for-ht-city-hindustan.jpg?s=612x612&w=0&k=20&c=StAJATi6z3WpfhUo89LK2Cr3aJmxdFShr4tnoTKmWh8=', profession: 'Singer', price: '₹5,00,000' },
    { id: 13, name: 'Salim–Sulaiman', img: 'https://media.gettyimages.com/id/142671242/photo/composers-salim-merchant-and-sulaiman-merchant-arrive-at-the-grammy-nominations-concert-live.jpg?s=612x612&w=0&k=20&c=qvEYFJ5YMjLxVJMiYF_A8X1mxdFOB_M-6iLbyTbgkFc=', profession: 'Music Composers', price: '₹14,00,000' },
    { id: 14, name: 'Pritam Chakraborty', img: 'https://media.gettyimages.com/id/847865706/photo/mumbai-india-bollywood-music-director-pritam-performs-at-a-concert-on-the-occasion-of-his.jpg?s=612x612&w=0&k=20&c=7JbdLg8Viy_lG7Y6vPXtb6dn60mCKWEaUoLNZvnQ4Fk=', profession: 'Music Composer', price: '₹16,00,000' },
    { id: 15, name: 'Vishal-Shekhar', img: 'https://media.gettyimages.com/id/141613914/photo/musician-vishal-dadlani-of-vishal-shekhar-performs-at-the-2011-iifa-awards-at-roger-arena-in.jpg?s=612x612&w=0&k=20&c=h2cpFlmJv-1mWiCXydNN_-EUf8b6zP-ykjbKlVpNw_k=', profession: 'Music Composers', price: '₹17,00,000' },
    { id: 16, name: 'Asha Bhosle', img: 'https://media.gettyimages.com/id/177579844/photo/indian-singer-asha-bhosle-performs-during-a-concert.jpg?s=612x612&w=0&k=20&c=XpFkJESFw5EwsZYUofe1KOtTh0mzwK_nRpcrNxXb_LM=', profession: 'Singer', price: '₹13,00,000' },
    { id: 17, name: 'Shaan', img: 'https://media.gettyimages.com/id/843913318/photo/mumbai-india-bollywood-singer-shaan-poses-during-the-launch-of-new-music-video-premature-in.jpg?s=612x612&w=0&k=20&c=RloDukMryenHYrpGbR25r5LX5ewJ-bToqI-tEs1GJYc=', profession: 'Singer', price: '₹9,50,000' },
    { id: 18, name: 'Lucky Ali', img: 'https://media.gettyimages.com/id/527454422/photo/mumbai-india-indian-singer-lucky-ali-performs-during-the-world-sufi-spirit-festival-at-the.jpg?s=612x612&w=0&k=20&c=fwOR0sE_g9USraDFNRcDf3ixRfS_f-3T35E95XvmU2E=', profession: 'Singer', price: '₹8,00,000' },
    { id: 19, name: 'Rahat Fateh Ali Khan', img: 'https://media.gettyimages.com/id/1441969647/photo/dubai-united-arab-emirates-rahat-fateh-ali-khan-performs-on-stage-during-coca-cola-arabia.jpg?s=612x612&w=0&k=20&c=sw_kTpg5PjcwnyDP0uDCkzVg2RQF1hzVdx_W6CzZpl0=', profession: 'Singer', price: '₹11,50,000' },
];

export default function ArtistDetails() {
  const { id } = useParams();
  const artist = artists.find(a => a.id === parseInt(id));

  if (!artist) return <h1>Artist not found</h1>;

  const handleBookEvent = () => {
    alert(`You have booked an event for ${artist.name} at a price of ${artist.price}`);
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Artist Details</h1>
      <img src={artist.img} alt={artist.name} style={{ width: '300px', height: '300px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.2)' }} />
      <h2>{artist.name}</h2>
      <p>{artist.profession}</p>
      <p>Booking Price: {artist.price}</p>
      <button onClick={handleBookEvent} style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer', borderRadius: '5px', backgroundColor: '#007BFF', color: 'white', border: 'none', marginTop: '20px' }}>
        Book Event
      </button>
    </div>
  );
}
