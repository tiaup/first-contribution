package com.tap;

import java.util.Scanner;

public class Stack{
	private int ar[];
	private int top;
	private int size;
	
	public Stack(int n) {
		// TODO Auto-generated constructor stub
		ar = new int[n];
		this.size=n;
		this.top=-1;
	}
	public void push(int x) {
		if(top==size-1) {
			System.out.println("Stack overflow");
			return;
		}
		else {
			ar[++top]=x;
			System.out.println(x+" is pushed into the stack");
		}
	}
		public int pop() {
			if(top==-1) {
				System.out.println("Stack underflow");
				return -1;	
			}
			
			return ar[top--];
		}
		public void printStack() {
			if(top==-1) {
				System.out.println("Empty Stack");
				return;
			}
			System.out.println("The stack is:");
			for(int i=0;i<=top;i++) {
				System.out.println(ar[i]+" ");
			}
			System.out.println();
		}
	

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		System.out.println("Enter the no.of stack elements:");
		int n = sc.nextInt();
		Stack stack1= new Stack(n);
		
		while(true) {
			System.out.println("Choose the operation to be performed:\n"
					+ " 1.Push \n 2.Pop\n 3.PrintStack \n 4.Exit");
			int ch = sc.nextInt();
			
		    switch(ch) {
			
			case 1:
				System.out.println("Enter the push value:");
				int p = sc.nextInt();
				stack1.push(p);
				

				break;
			case 2:
				int q=stack1.pop();
				if(q!=-1) {
					System.out.println(q+" is popped");
				}

				break;
			case 3:
				stack1.printStack();
				break;
			case 4:
				System.out.println("Exited...");
				sc.close();
				return;
			default:
				System.out.println("Invalid input!!! Make sure give the correct Input");
			
		  }	
		}
	}
}


		
