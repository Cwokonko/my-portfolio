package com.google.sps.servlets;

import java.io.IOException;
import javax.servlet.annotation.WebServlet;
import com.google.gson.Gson;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/** Handles requests sent to the /hello URL. Try running a server and navigating to /hello! */
@WebServlet("/hello")
public class HelloWorldServlet extends HttpServlet {
    private final static String[] facts = {"I speak three languages","My go-to deli order is bagel with cream cheese & jelly","My Favorite book is Things Fall Apart by Chinua Achebe"};

  @Override
  public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
    String json = convertToJson(facts);
    response.setContentType("text/html;");
    response.getWriter().println(json);
  }

   private String convertToJson(String[] facts) {
    String json = "{";
    json += "\"fact1\": ";
    json += "\"" + facts[0] + "\"";
    json += ", ";
    json += "\"fact2\": ";
    json += "\"" + facts[1] + "\"";
    json += ", ";
    json += "\"fact3\": ";
    json += "\"" + facts[2] + "\"";
    json += "}";
    return json;
  }
}