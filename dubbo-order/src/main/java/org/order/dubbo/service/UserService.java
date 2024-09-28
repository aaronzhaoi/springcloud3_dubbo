package org.order.dubbo.service;


import org.apache.dubbo.config.annotation.DubboReference;
import org.order.dubbo.api.domain.UserDTO;
import org.order.dubbo.api.facade.UserProvideFacade;
import org.order.dubbo.persistent.dao.mapper.OrderMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @DubboReference
    private UserProvideFacade userProvideFacade;

    @Autowired
    private OrderMapper orderMapper;


    public String placeOrder(String name) {
        // 生成订单
        UserDTO userDTO = new UserDTO();
        userDTO.setUserId(789);
        userDTO.setUserName(name);
        orderMapper.insertOrder(userDTO);
        System.out.print("快递信息生成完毕：" + userDTO.toString());


        return userProvideFacade.placeOrder(userDTO).toString();
    }

}