import { error } from '@sveltejs/kit';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const anthem = await prisma.anthem.create({
  data: {
    country: "England",
    text: "God Save the Queen"
  },
})


/** @type {import('./$types').PageLoad} */
export function load({ params }) {
  if (params.country === 'England') {

    const anthemByCountry = await prisma.anthem.findUnique({
      where : {
        country: params.country,
      },
    })

    console.log(anthemByCountry.text);
    return {
      title: 'Hello world!',
      content: 'Welcome to our blog. Lorem ipsum dolor sit amet...'
    };
  }
 
  throw error(404, 'Not found');
}

