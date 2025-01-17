export interface SHOE_OPTION { 
    tag: string, 
    text: string
}

export const SHOES_OPTIONS: SHOE_OPTION[] = [
    {tag: 'trail-running', text: 'Trail Running'}, 
    {tag: 'running', text: 'Running'}, 
    {tag: 'daily', text: 'Daily'}, 
    {tag: 'trekking', text: 'Trekking'}, 

]

export const CATEGORIES = [
    {
      id: "running",
      name: "running",
    },
    {
      id: "trail-running",
      name: "trail running",
    },
    {
      id: "trekking",
      name: "trekking",
    },
  ];