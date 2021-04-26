import React from 'react'
import { HorizontalScroll } from '../../fragments/HorizontalScroll'
import { Typography } from '../../fragments/Typography'

export const Techs = () => {
  return (
    <section>
      <Typography.Title>UI & UX</Typography.Title>
      <Typography.Paragraph justify>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
        odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
        voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
        quia dolor sit amet, consectetur, adipisci velit.
      </Typography.Paragraph>
      <Typography.SubTitle>TECNOLOGIAS</Typography.SubTitle>
      <HorizontalScroll>
        <img src="http://via.placeholder.com/64x100" />
        <img src="http://via.placeholder.com/64x100" />
        <img src="http://via.placeholder.com/64x100" />
        <img src="http://via.placeholder.com/64x100" />
        <img src="http://via.placeholder.com/64x100" />
        <img src="http://via.placeholder.com/64x100" />
      </HorizontalScroll>
    </section>
  )
}
