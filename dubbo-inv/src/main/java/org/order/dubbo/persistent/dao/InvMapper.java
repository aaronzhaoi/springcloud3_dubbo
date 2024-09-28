package org.order.dubbo.persistent.dao;


import org.apache.ibatis.annotations.Param;
import org.order.dubbo.api.domain.OrderInv;
import org.order.dubbo.api.domain.UserDTO;
import org.springframework.stereotype.Repository;

@Repository
public interface InvMapper {

   void insertInv(@Param("orderInv") OrderInv orderInv);
}
