package com.iwishyoujoy.weblab4;

import jakarta.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "dots")
public class Dot implements Serializable {
    @Id
    @GeneratedValue
    private Long id;
    private float x;
    private float y;
    private float r;
    private boolean status;
    private long timestamp;
    private long scriptTime;
    private String owner;

    public Dot() {}

    public Dot(float x, float y, float r) {
        this.x = x;
        this.y = y;
        this.r = r;
        checkStatus();
    }

    private void checkStatus() {
        if (x > 0.0 && y > 0.0)
            status = false;
        else if (x >= 0.0 && y <= 0.0)
            status = x * x + y * y <= r * r;
        else if (x <= 0.0 && y >= 0.0)
            status = x >= -r / 2.0 && y <= r;
        else if (x <= 0.0 && y <= 0.0)
            status = -x <= 2.0 * y + r;
    }

    public float getX() {
        return x;
    }

    public void setX(float x) {
        this.x = x;
    }

    public float getY() {
        return y;
    }

    public void setY(float y) {
        this.y = y;
    }

    public float getR() {
        return r;
    }

    public void setR(float radius) {
        this.r = radius;
    }

    public boolean getStatus() {
        return status;
    }

    public void setStatus(boolean status) {
        this.status = status;
    }

    public long getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(long timestamp) {
        this.timestamp = timestamp;
    }

    public String getOwner() {
        return owner;
    }

    public void setOwner(String owner) {
        this.owner = owner;
    }

    public long getScriptTime() {
        return scriptTime;
    }

    public void setScriptTime(long scriptTime) {
        this.scriptTime = scriptTime;
    }
}
