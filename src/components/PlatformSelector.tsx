import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'
import usePlatform from '../hooks/usePlatform'
import usePlatforms from '../hooks/usePlatforms'
import useGameQueryStore from '../store'

const PlatformSelector = () => {
  const {data, error} = usePlatforms()
  const platformId = useGameQueryStore(s => s.gameQuery.platformId)
  const setPlatfrom = useGameQueryStore(s => s.setPlatfrom)
  const platformSelected = usePlatform(platformId)

  if (error) return null

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {platformSelected?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {data?.results.map((platform) => (
          <MenuItem key={platform.id} onClick={() => setPlatfrom(platform.id)}>
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}

export default PlatformSelector