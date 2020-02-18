import React, { Component } from 'react';
import Loading from '../Loading';

const withItemDetail = (View, getData, getUserImage) => {
  return class extends Component {
    state = {
        item: null,
        image: null
      }
    
      componentDidMount() {
        if (this.props.itemId) {
            this.getItem()
        }
      }
      
      componentDidUpdate(prevProps) {
        if (prevProps.itemId !== this.props.itemId) {
            this.getItem()
        }
      }
    
      getItem = async () => {
        const { itemId } = this.props;
        const item = await getData(itemId);
        const image = await getUserImage(itemId);
        
        this.setState({ item, image });
      }

    render () {
        const { item, image } = this.state;
        
        if (!item) return <Loading />;

        return (
            <View item={item} image={image} {...this.props} />
      )
    }
  }
}

export default withItemDetail;