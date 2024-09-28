package org.order.dubbo.api.domain;


import lombok.Data;

import java.io.Serializable;

@Data
public class CustomBalance implements Serializable {

    int userId;

    int balanceId;

    int balance;
}
