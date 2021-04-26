import React from 'react'
import { AvatarImage } from '../../fragments/Avatar'
import { Typography } from '../../fragments/Typography'

const PROFILE_IMAGE = 'http://via.placeholder.com/250'

export const About = () => {
  return (
    <section>
      <AvatarImage src={PROFILE_IMAGE} />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 4,
          alignItems: 'center'
        }}
      >
        <Typography.Callout>SOU</Typography.Callout>
        <Typography.Title>GIUSEPPE SETEM</Typography.Title>
        <Typography.SubTitle>DESENVOLVEDOR</Typography.SubTitle>
      </div>

      <Typography.Paragraph justify>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
        odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
        voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
        quia dolor sit amet, consectetur, adipisci velit.
      </Typography.Paragraph>
    </section>
  )
}
