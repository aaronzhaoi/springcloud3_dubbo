package org.order.service.impl;

import org.order.persistent.order.mapper.OrderMapper;
import org.order.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class OrderServiceImpl implements OrderService {

    @Autowired
    private OrderMapper orderMapper;

    @Override
    public String getOrderName(int OrderId) {
        return orderMapper.getOrderName(OrderId);
    }
}
