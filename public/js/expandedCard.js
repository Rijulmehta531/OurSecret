
const cards = document.querySelectorAll('.card');

const expandedCard = document.querySelector('.expanded-card');
const expandedTitle = document.getElementById('expanded-title');
const expandedDescription = document.getElementById('expanded-description');
const expandedCardImage = document.getElementById('expanded-card-img');

const perfumeData = {
    'Jasmine Noir': {
        description: 'Jasmine Noir is a classic choice for those who appreciate the timeless beauty of floral perfumes. It\'s a scent that evokes images of blooming gardens, warm summer evenings, and elegant bouquets. The jasmine note, with its rich and opulent character, is often associated with sophistication and femininity.',
        imageSrc: 'images/JasmineNoir.jpg',
        gender: 'Women',
        status: 'In Stock'
    },
    'Allure': {
        description: 'Allure is a fragrance that exudes sophistication and refinement. This perfume is often associated with special occasions and formal events due to its opulent and long-lasting nature. It\'s a scent for those who appreciate the artistry of perfumery and desire a fragrance that stands out as a true work of olfactory art.',
        imageSrc: 'images/Allure.jpg',
        gender: 'Unisex',
        status: 'Out of Stock'
    },
    'Creed': {
        description: 'Creed is a fragrance that commands attention and admiration. It\'s often associated with confidence, success, and charisma. Creed wearers are often seen as individuals who are unapologetically bold and ambitious, making a lasting impression wherever they go.',
        imageSrc: 'images/Creed.jpg',
        gender: 'Men',
        status: 'In Stock'
    },
    'Classic Kool': {
        description: 'It\'s known for its clean and refreshing character, making it suitable for everyday wear, especially during the warm seasons. Whether you\'re heading to the office, hanging out with friends, or enjoying a casual outing, Classic Kool\'s balanced blend of citrus, florals, and woods makes it a classic choice for those who appreciate simplicity and sophistication in a fragrance.',
        imageSrc: 'images/Ck.jpg',
        gender: 'Unisex',
        status: 'In Stock'
    },
    'Vanity Affair': {
        description: 'Vanity Affair is a fragrance designed for those who appreciate the indulgent and irresistible aroma of vanilla. It\'s a warm and sensual scent that wraps you in a comforting embrace, making it ideal for cooler seasons or evening wear. Whether you\'re attending a special event or simply want to feel cozy and pampered, Vanity Affair is a delicious choice.',
        imageSrc: 'images/Vanity.jpg',
        gender: 'Unisex',
        status: 'In Stock'
    },
    'Bloom': {
        description: 'Bloom is not just a fragrance; it\'s an attitude. It exudes confidence and charisma, making it a timeless choice for those who appreciate a scent that is both elegant and intriguing. Whether you\'re wearing it to the office or on a special date night, Bloom leaves a lasting impression of sophistication and magnetism.',
        imageSrc: 'images/Bloom.jpg',
        gender: 'Men',
        status: 'In Stock'
    },
    'Oud Royale': {
        description: 'Oud Royale is a statement of luxury and refinement. It\'s a scent that transports the wearer to a world of elegance and mystique. Wearing an oud fragrance is like embarking on a fragrant journey to the heart of the East, where tradition meets modernity in a harmonious blend of sensuality and sophistication.',
        imageSrc: 'images/OudRoyale.jpg',
        gender: 'Unisex',
        status: 'In Stock'
    },
    'Bombshell': {
        description: 'Bombshell is a fragrance that celebrates the elegance of both rose and oud, making it an ideal choice for those who appreciate the opulence of oriental floral perfumes. It\'s a scent that exudes sophistication and sensuality, suitable for special occasions or when you desire a luxurious and memorable fragrance experience.',
        imageSrc: 'images/Bombshell.jpg',
        gender: 'Unisex',
        status: 'In Stock'
    },
    'Willow': {
        description: 'Wearing Willow is like wrapping yourself in a cozy and sumptuous blanket of scent. It\'s a fragrance that invites you to savor the sweetness of vanilla and the earthy richness of tobacco, creating an aura of indulgence and luxury. Whether you\'re attending an elegant soirée or simply want to feel pampered, Willow is a classic choice for those who appreciate opulent and unforgettable scents.',
        imageSrc: 'images/Willow.jpg',
        gender: 'Unisex',
        status: 'In Stock'
    },
    'Arabian Oud': {
        description: 'Arabian Oud is a luxurious and exotic fragrance that combines two of the most prized and opulent fragrance ingredients: amber and oud (agarwood). This perfume is celebrated for its rich and complex character, evoking the enchanting allure of the East.',
        imageSrc: 'images/ArabianOud.jpg',
        gender: 'Unisex',
        status: 'In Stock'
    },
    'Cherish': {
        description: 'Wearing Cherish is like adorning yourself with a perfectly tailored suit or donning a classic strand of pearls—it\'s a fragrance that enhances your presence with a touch of refinement and timeless beauty. Whether you\'re heading to a formal event or simply want to feel elegantly poised, Cherish is a fragrance that encapsulates the essence of enduring legacy in the world of fashion and fragrance.',
        imageSrc: 'images/Cherish.jpg',
        gender: 'Female',
        status: 'In Stock'
    },
    'Creed': {
        description: 'Description for Creed.',
        imageSrc: 'images/Creed.jpg',
        gender: 'Unisex',
        status: 'In Stock'
    },
    'Creed': {
        description: 'Description for Creed.',
        imageSrc: 'images/Creed.jpg',
        gender: 'Unisex',
        status: 'In Stock'
    },
    'Creed': {
        description: 'Description for Creed.',
        imageSrc: 'images/Creed.jpg',
        gender: 'Unisex',
        status: 'In Stock'
    },
    'Creed': {
        description: 'Description for Creed.',
        imageSrc: 'images/Creed.jpg',
        gender: 'Unisex',
        status: 'In Stock'
    },
    'Creed': {
        description: 'Description for Creed.',
        imageSrc: 'images/Creed.jpg',
        gender: 'Unisex',
        status: 'In Stock'
    },
    'Creed': {
        description: 'Description for Creed.',
        imageSrc: 'images/Creed.jpg',
        gender: 'Unisex',
        status: 'In Stock'
    },
    'Creed': {
        description: 'Description for Creed.',
        imageSrc: 'images/Creed.jpg',
        gender: 'Unisex',
        status: 'In Stock'
    },
    'Creed': {
        description: 'Description for Creed.',
        imageSrc: 'images/Creed.jpg',
        gender: 'Unisex',
        status: 'In Stock'
    },
    // Add more perfume titles and their data as needed
};


cards.forEach(card => {
   card.addEventListener('click', () => {
    console.log('On click called');

    const cardTitle = card.getAttribute('data-card-title'); // Get the card's title from the data attribute
       expandedTitle.textContent = cardTitle;
      // Get the perfume data from the object based on the card title
    const perfume = perfumeData[cardTitle];

    // if (perfume) {
    //     expandedDescription.textContent = perfume.description || 'Description not found.';
    //     expandedCardImage.src = perfume.imageSrc || '';
    //     expandedGender.textContent = `Gender: ${perfume.gender || 'N/A'}`;
    //     expandedStatus.textContent = `Status: ${perfume.status || 'N/A'}`;
    // } else {
    //     expandedDescription.textContent = 'Description not found.';
    //     expandedCardImage.src = '';
    //     expandedGender.textContent = 'Gender: N/A';
    //     expandedStatus.textContent = 'Status: N/A';
    // }
    
       //expandedDescription.textContent = "It's known for its clean and refreshing character, making it suitable for everyday wear, especially during the warm seasons. Whether you're heading to the office, hanging out with friends, or enjoying a casual outing, CK One's balanced blend of citrus, florals, and woods makes it a classic choice for those who appreciate simplicity and sophistication in a fragrance.";
       expandedCardImage.src = card.querySelector('img').src;
       expandedCard.style.display = 'block';
      
       
   });

   card.addEventListener('mouseleave', () => {
       expandedCard.style.display = 'none';
      
   });
});
