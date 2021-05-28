{
    firstName: { type : String },
    lastName : { type: String },
    emailPrimary: { type: String },
    emailSecondry: { type: String },
    phone: { type: Number },
    otp: { type: Number },
    passwordHash: { type: String },
    passwordSalt: { type: String },
    loginType: { type: Number },
    loginId: { type: Number },
    location: {
        latitude: { type: Number, default: 0 },
        longitude: { type: Number, default: 0 }
    },
    songId: { type: mongoid },
    countryCode : { type: Number },
    profilePic:{
        thumbnail: {
              url : { type: String },
              s3URL: {type: String},
              s3Bucket: {type: String},
              key: {type: String}
        },
        original: {
              url : { type: String },
              s3URL: {type: String},
              s3Bucket: {type: String},
              key: {type: String}
        }
    },
    accountType: {
        type: Number,
        default: 0
    },
    gender:{
        type: Number,
        default: DB.GENDER.MALE
    },
    dob:{
        type: Date
    },
    created: {
        type: Date,
        default: Date.now
    },
    updated:{ 
        type: Date
    },
    comment: {
        type: String
    }
}

{
    singer: 'singer',
    'music director': 'music director',
    actor: 'actor',
    lyricist: 'lyricist',
    primary: 'primary',
    featuring: 'featuring',
    producer: 'producer',
    director: 'director',
    dj: 'dj',
    arranger: 'arranger',
    filmdirector: 'filmdirector',
    banner: 'banner'
  }



  // (async ()=>{
//     let role = {};
//     let page = 0;
//     let getArtists = async ()=>{
//         ++page;
//         console.log(page);
//         let res = await fetch("https://www.jiosaavn.com/api.php?      p="+page+"&q=a&_format=json&_marker=0&api_version=4&ctx=web6dot0&n=20&__call=search.getArtistResults");
//         let {results} = await res.json();
//         // console.log(results);
//         let result = results.reduce((x, y)=>{
//             if(y.role){
//                x[y.role] = y.role;
//             }
//             return x;
//         }, role)
//     }
//     const sleep = (m,r) => new Promise(r => setTimeout(r, m))
//     let n = [...Array(100).keys()];
//     for(let x of n){
//         let res = await getArtists();
//         await sleep(3000, 4000);
//        console.log(role)
//     }
    
// })();





















