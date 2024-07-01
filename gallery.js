const photos = [
    { src: 'baby3.jpg', message: 'From this......' },
    { src: 'img6.jpg', message: 'U grown up to this.....!' },
    { src: 'baby1.jpg', message: 'Not so easy....u did this....' },
    { src: 'baby2.jpg', message: 'And this too....' },
    { src: 'holding_handa.jpg', message: 'Then me came to you like devil from the sky....Nah just kidding we met each other when we wanted each other.....!' },
    { src: 'forever.jpg', message: 'Then we Decided to make it forever!!!' },
    { src: 'frnds.jpg', message: 'We used a beautiful word to call this relationship - Friendship....' },
    { src: 'img1.jpg', message: 'I tried to give my heart....But....' },
    { src: 'heart.jpg', message: 'U gave yours so effortlessly.....' },
    { src: 'img4.jpg', message: 'Then together we made a whole beautiful heart....' },
    { src: 'img10.jpg', message: 'Manyyyy moreeeee hearts..... and to be counted!!!!' },
    { src: 'img8.jpg', message: 'Found a visiting spot....Adhoda viduvoma....' },
    { src: 'img26.jpg', message: 'We met again....avlo seekiram vitruvoma....' },
    { src: 'img3.jpg', message: 'and again and again....Adhu epdi nga vida mudiyum....Thirumba thirumba povom la' },
    { src: 'sky1.jpg', message: 'you are this....' },
    { src: 'sky2.jpg', message: 'And this tooooo....' },
    { src: 'sky3.jpg', message: 'And this <<<3 ....' },
    { src: 'img15.jpg', message: 'U have your partner....' },
    { src: 'img18.jpg', message: 'And I have mine....' },
    { src: 'img14.jpg', message: 'U were admiring him....' },
    { src: 'img9.jpg', message: 'When I was admiring You....' },
    { src: 'img16.jpg', message: 'A surprise visit....nee surprise aaniya nu therila...but still' },
    { src: 'img22.jpg', message: 'Did many crazy things like this...Miss those days...' },
    { src: 'img23.jpg', message: 'When we were happy...together....enna koldradhula avlo aanandham' },
    { src: 'letter.jpg', message: 'Wanted to remind you again...Do read this..' },
    { src: 'lastday.jpg', message: 'Felt like we lost a chance to meet often...' },
    { src: 'img7.jpg', message: 'But we do meet often...' },
    { src: 'fav.jpg', message: 'My fav pic of you...dont know y but Pudichu iruku pah....pic ah mattum illa....unnaiyum....will you be with me forever....' },
    { src: 'signed.jpg', message: 'Okay nee enna sonnalum...prechana illa....becoz we signed ...so we are mentally...physically....and officially besties now....!  Byeee' },
  ];
  
  let currentPhotoIndex = 0;
  
  const photoElement = document.getElementById('photo');
  const messageOverlayElement = document.getElementById('messageOverlay');
  const messageElement = document.getElementById('message');
  const nextButtonElement = document.getElementById('nextButton');
  
  const showPhoto = (index) => {
    const photo = photos[index];
    photoElement.src = photo.src;
    messageElement.textContent = photo.message;
  };
  
  const handleMessageClick = () => {
    messageOverlayElement.style.display = 'none';
  };
  
  const handleNextClick = () => {
    currentPhotoIndex = (currentPhotoIndex + 1) % photos.length;
    showPhoto(currentPhotoIndex);
    messageOverlayElement.style.display = 'flex';
  };
  
  messageOverlayElement.addEventListener('click', handleMessageClick);
  nextButtonElement.addEventListener('click', handleNextClick);
  
  // Initial load
  showPhoto(currentPhotoIndex);
  