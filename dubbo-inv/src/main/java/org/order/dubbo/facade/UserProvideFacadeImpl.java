package org.order.dubbo.facade;


import org.apache.dubbo.config.annotation.DubboReference;
import org.apache.dubbo.config.annotation.DubboService;
import org.order.dubbo.api.domain.OrderInv;
import org.order.dubbo.api.domain.UserDTO;
import org.order.dubbo.api.facade.UserBalanceFacade;
import org.order.dubbo.api.facade.UserProvideFacade;
import org.order.dubbo.persistent.dao.InvMapper;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.Random;

@DubboService
public class UserProvideFacadeImpl implements UserProvideFacade {


    @DubboReference
    private UserBalanceFacade userBalanceFacade;

    @Autowired
    private InvMapper invMapper;

    @Override
    public UserDTO placeOrder(UserDTO userDTO) {
        // 生成订单
        OrderInv orderInv = new OrderInv();
        orderInv.setItemId(new Random().nextInt());
        orderInv.setItemName("商品01");
        userDTO.setOrderInv(orderInv);

        invMapper.insertInv(orderInv);
        System.out.print("商品信息生成完毕：" + userDTO.toString());
        // 扣减余额

        return userBalanceFacade.deductBalance(userDTO);
    }
}
