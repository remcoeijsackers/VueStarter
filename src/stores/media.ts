
export default interface MediaPost {
  id: number
  title: string
  content: string
  image: string
  tags: Array<string>
  date: string
  author: string
  type: string,
  double_width: boolean,
  link?: string,
  link_text?: string,
  has_page: boolean
}

export const media4: MediaPost = {
  id: 4,
  title: "Sample Media 4",
  content: "Media card",
  image: "/images/water.jpg",
  tags: [
    "nature",
    "water"
  ],
  date: "2023-02-20",
  author: "Remco Eijsackers",
  type: "media",
  double_width: true,
  has_page: false
}

export const media3: MediaPost = {
  id: 3,
  title: "Sample Media 3",
  content: "Media card with link",
  image: "/images/purpleflower.jpg",
  tags: [
    "nature",
  ],
  date: "2024-02-20",
  author: "Remco Eijsackers",
  type: "media",
  link: "https://open.spotify.com/album/1MneIfVY9H7yTnSYP2utT8?si=2LhnByr1TxOqymB63d64ig",
  link_text: "Listen on Spotify",
  double_width: false,
  has_page: false
}


export const media2: MediaPost = {
    id: 2,
    title: "Sample Media 2",
    content: "Double width media card",
    image: "/images/water.jpg",
    tags: [
      "water",
      "nature"
    ],
    date: "2019-02-20",
    author: "John Doe",
    type: "media",
    double_width: true,
    has_page: false
  }

  export const media1: MediaPost = {
    id: 1,
    title: "Sample Media 1",
    content: "Simple image card",
    image: "/images/monkey.jpg",
    tags: [
      "nature"
    ],
    date: "2018-12-10",
    author: "John Doe",
    type: "media",
    double_width: false,
    has_page: false
  }

  export const mediacontent = [
    media4,
    media3,
    media2,
    media1,

  ]

export function getMediaItem(id: number): any {
    const object = mediacontent.find(obj => obj.id === id);
    return object
}

export function getMediaItems(): Array<MediaPost> {
  const x: Array<MediaPost> = []
  mediacontent.forEach( (post) => {
      if(post.type === "media"){
          x.push(post)
      }
  });
  return x
}
