package org.order.dubbo.api.domain;


import lombok.Data;

import java.io.Serializable;

@Data
public class OrderInv implements Serializable {
    private int itemId;

    private String itemName;
}
