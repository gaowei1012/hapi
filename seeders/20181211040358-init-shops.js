'use strict';
// 时间戳
const timestamps = {
  created_at: new Date(),
  updated_at: new Date(),
};

module.exports = {
  // 插入到数据库 
  up: queryInterface => queryInterface.bulkInsert(
    'shops',
    [
      { id:1 , name: '店铺1', thumb_url: '1.png', ...timestamps },
      { id:2 , name: '店铺2', thumb_url: '2.png', ...timestamps },
      { id:3 , name: '店铺3', thumb_url: '3.png', ...timestamps },
      { id:4 , name: '店铺4', thumb_url: '4.png', ...timestamps },
      { id:5 , name: '店铺5', thumb_url: '5.png', ...timestamps },
      { id:6 , name: '店铺6', thumb_url: '6.png', ...timestamps },
      { id:7 , name: '店铺7', thumb_url: '7.png', ...timestamps },
      { id:8 , name: '店铺8', thumb_url: '8.png', ...timestamps },
      { id:9 , name: '店铺9', thumb_url: '9.png', ...timestamps },
      { id:10 , name: '店铺10', thumb_url: '10.png', ...timestamps },
      { id:11 , name: '店铺11', thumb_url: '11.png', ...timestamps },
    ]
  ),

  down: (queryInterface, Sequelize) => {
    const { Op } = Sequelize;

    // 删除 shop 表 id 为 1、 3 记录值
    return queryInterface.bulkDelete( 'shops', {id : { [Op.in]: [1, 3]}}, {})
  }
};
