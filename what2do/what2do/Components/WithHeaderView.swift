//
//  WithHeaderView.swift
//  what2do
//
//  Created by Guillem Sardà Parreu on 27/8/24.
//

import SwiftUI

struct WithHeaderView<Children: View>: View {
    var translationKey: String
    let children: Children
    
    init(translationKey: String, @ViewBuilder children: () -> Children) {
        self.translationKey = translationKey
        self.children = children()
    }
    
    var body: some View {
        ZStack {
            Text(LocalizedStringKey(self.translationKey))
                .font(.largeTitle)
                .fontWeight(.bold)
                .zIndex(1)
                .frame(maxWidth: .infinity, maxHeight: .infinity, alignment: .top)
                .padding([.top], 30)
                self.children
        }
    }
}

#Preview {
    WithHeaderView(translationKey: "welcome", children: {
        VStack {
            Text("Hello")
            Text("Another child")
        }
        .frame(minWidth: /*@START_MENU_TOKEN@*/0/*@END_MENU_TOKEN@*/, maxWidth: .infinity, minHeight: 0, maxHeight:.infinity)
        .background(.yellow)
    })
}

#Preview {
    WithHeaderView(translationKey: "welcome") {
        VStack {
            Text("Hello")
            Text("Another child")
        }
    }
}

