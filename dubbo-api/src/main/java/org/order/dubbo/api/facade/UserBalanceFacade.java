package org.order.dubbo.api.facade;

import org.order.dubbo.api.domain.UserDTO;

public interface UserBalanceFacade {

    UserDTO deductBalance(UserDTO userDTO);
}
