import {Stack, Card, Flex, Text} from '@sanity/ui'

export default function StudioNavBar(props: any) {
  return (
    <Stack>
      <Card padding={3} tone="caution">
        <Flex justify="center">
          <Text>{props.logo}</Text>
        </Flex>
      </Card>
      <>{props.renderDefault(props)}</>
    </Stack>
  )
}
