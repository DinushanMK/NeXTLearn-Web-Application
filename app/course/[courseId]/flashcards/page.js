"use client"
import axios from 'axios';
import { useParams, useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import FlashcardItem from './_components/FlashcardItem';

function Flashcards() {
  const { courseId } = useParams();
  const route = useRouter();
  const [flashCards, setFlashCards] = useState([]);
  const [isFlipped, setIsFlipped] = useState();
  const [api, setApi] = useState();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    GetFlashCards();
  }, [])

  useEffect(() => {
    if (!api) {
      return;
    }
    api.on('select', () => {
      setIsFlipped(false);
    })
  }, [api])

  useEffect(() => {
    if (!api) return;

    const updateSlide = () => {
      setCurrentSlide(api.selectedScrollSnap());
    };

    api.on('select', updateSlide);
    updateSlide();

    return () => {
      api.off('select', updateSlide);
    };
  }, [api]);

  const GetFlashCards = async () => {
    const result = await axios.post('/api/study-type', {
      courseId: courseId,
      studyType: 'Flashcard'
    });
    setFlashCards(result?.data);
    console.log('Flashcard', result.data);
  }

  const handleClick = (index) => {
    setIsFlipped(!isFlipped)
  }

  return (
    <div>
      <h2 className='font-bold text-2xl'>Flashcards</h2>
      <p>The Ultimate Way to Lock in Concepts</p>

      <div className='mt-10'>
        <Carousel setApi={setApi}>
          <CarouselContent>
            {flashCards?.content && flashCards.content?.map((flashcard, index) => (
              <CarouselItem key={index} className="flex items-center justify-center">
                <FlashcardItem handleClick={handleClick}
                  isFlipped={isFlipped}
                  flashcard={flashcard} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

      {flashCards?.content && currentSlide === flashCards.content.length - 1 && (
        <div className="flex items-center gap-2 flex-col justify-center mt-4">
          <h2>End of Flashcards</h2>
          <Button onClick={() => route.back()}>Go to Course Page</Button>
        </div>
      )}
    </div>
  )
}

export default Flashcards



// "use client"
// import axios from 'axios';
// import { useParams } from 'next/navigation'
// import React, { useEffect, useState } from 'react'

// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel"
// import FlashcardItem from './_components/FlashcardItem';



// function Flashcards() {

//   const { courseId } = useParams();
//   const [flashCards, setFlashCards] = useState([]);
//   const [isFlipped, setIsFlipped] = useState();
//   const[api,setApi]=useState();
  


//   useEffect(() => {
//     GetFlashCards();
//   }, [])

//   useEffect(()=>{
//     if(!api)
//     {
//         return ;
//     }
//     api.on('select',()=>{
//         setIsFlipped(false);
//     })
// },[api])

//   const GetFlashCards = async () => {
//     const result = await axios.post('/api/study-type', {
//       courseId: courseId,
//       studyType: 'Flashcard'
//     });
//     setFlashCards(result?.data);
//     console.log('Flashcard', result.data);

//   }

//   const handleClick = (index) => {
//     setIsFlipped(!isFlipped)
//   }

//   return (
//     <div>
//       <h2 className='font-bold text-2xl'>Flashcards</h2>
//       <p>The Ultimate Way to Lock in Concepts</p>

//       <div className='mt-10'>
//         <Carousel setApi={setApi}>
//           <CarouselContent>
//             {flashCards?.content && flashCards.content?.map((flashcard, index) => (
//               <CarouselItem key={index} className="flex items-center justify-center">
//                 <FlashcardItem handleClick={handleClick}
//                   isFlipped={isFlipped}
//                   flashcard={flashcard} />
//               </CarouselItem>
//             ))}

//           </CarouselContent>
//           <CarouselPrevious />
//           <CarouselNext />
//         </Carousel>
//       </div>

//     </div>
//   )
// }

// export default Flashcards
