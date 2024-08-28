import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';

interface Props {
  onSelectOrder: (sortOrder: string) => void
  selectedOrder: string
}

const SortSelector = ({onSelectOrder, selectedOrder}: Props) => {
  const sortOrders = [
    {value: "", label: "Relevance"},
    {value: "-added", label: "Date added"},
    {value: "name", label: "Name"},
    {value: "-released", label: "Release date"},
    {value: "-metacritic", label: "Popularity"},
    {value: "-rating", label: "Average rating"},
  ]

  const currentOrder = sortOrders.find(order => order.value === selectedOrder)

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order By: {currentOrder?.label || "Relevance"}
      </MenuButton>
      <MenuList>
        {sortOrders.map((sortOrder) => (
          <MenuItem
            onClick={() => onSelectOrder(sortOrder.value)}
            key={sortOrder.value}
            value={sortOrder.value}
          >
            {sortOrder.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector