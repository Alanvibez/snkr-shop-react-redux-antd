import { FC, useMemo } from 'react'
import { useAppSelector } from '../store/hooks'
import { filterSelector } from '../store/slices/FilterSlice'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import Card from './Card'
import { Empty } from 'antd'
import { sneakerSelector } from '../store/slices/SneakerSlice'

const CardList: FC = () => {
  const { sneakers } = useAppSelector(sneakerSelector)
  const filters = useAppSelector(filterSelector)
  const { sort } = filters

  const filteredItems = useMemo(() => {
    return sneakers.filter((sneaker) => {
      if (sneaker.story_html === '' && sneaker.retail_price_cents === null) {
        return false;
      }

      if (filters.gender !== '' && filters.gender !== sneaker.gender[0]) {
        return false;
      }

      if (filters.sizes.length !== 0 && !sneaker.size_range.some((size) => filters.sizes.includes(size))) {
        return false;
      }

      if (filters.brandnames.length !== 0 && !filters.brandnames.includes(sneaker.brand_name)) {
        return false;
      }

      if (filters.colors.length !== 0 && !filters.colors.includes(sneaker.color)) {
        return false;
      }

      return true;
    });
  }, [filters, sneakers]);

  const sortedItems = useMemo(() => {
    const sortedArray = [...filteredItems];

    if (sort !== '') {
      sortedArray.sort((a, b) => {
        switch (sort) {
          case 'cheaper':
            return (
              (a.retail_price_cents !== null && b.retail_price_cents !== null
                ? a.retail_price_cents - b.retail_price_cents
                : 0)
            );
          case 'expensive':
            return (
              (a.retail_price_cents !== null && b.retail_price_cents !== null
                ? b.retail_price_cents - a.retail_price_cents
                : 0)
            );
          case 'new':
            return (
              (a.release_year !== null && b.release_year !== null
                ? b.release_year - a.release_year
                : 0)
            );
          default:
            return 0;
        }
      });
    }

    return sortedArray;
  }, [sort, filteredItems]);
 

  return (
    <>
      {sortedItems.length ? (
        <TransitionGroup className="flex justify-between flex-wrap gap-x-[20px] gap-y-[40px]">
          {sortedItems.map((item) => (
            <CSSTransition key={item.id} timeout={200} classNames="my-node">
              <Card key={item.id} shoe={item} />
            </CSSTransition>
          ))}
        </TransitionGroup>
      ) : (
        <Empty className="" />
      )}
    </>
  )
}

export default CardList
